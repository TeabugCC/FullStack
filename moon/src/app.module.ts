import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';// ConfigService 用于加载和管理应用配置
import { TypeOrmModule } from '@nestjs/typeorm';// TypeOrmModule 用于集成 TypeORM 数据库模块
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
// import databaseConfig from './config/dataBase.config';
// import { config } from 'process';
// 如果连接过程中遇到 ConnectionRefused 报错，记得检查 .env 里的账号密码是否和你的 MySQL 实例一致哦！
@Module({
  imports: [UserModule,
    // 1. 全局加载配置模块 ConfigModule是 NestJS 提供的用于管理应用配置的模块
    // 地位等同生产者-准备数据，目的是录入入环境变量，并使其在应用的任何地方都可以访问。是前置基础条件
    ConfigModule.forRoot({
      // 设置为全局可见，这样其他 Module 就不需要重复导入 ConfigModule 了
      isGlobal: true, // 全局注册配置模块，无需在其他模块中重复导入
      envFilePath: '.env', // 指定环境变量文件路径 
      // 加载我们刚才写的 database 配置函数
      // load:[databaseConfig], // 也可以直接引用
      load: [require('./config/database.config').default], // 加载自定义配置文件
    }),
    // 2. 异步注册数据库模块
    // 负责根据配置动态创建数据库连接，消费 ConfigModule 提供的配置数据
    // 此处使用异步，而不直接用 TypeOrmModule.forRoot (同步方式)的原因在于：
    // 我们的数据库配置依赖于环境变量，而环境变量的加载是异步的过程。
    // 因此，我们需要确保在创建数据库连接之前，所有的配置都已经正确加载完毕。
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // 导入 ConfigModule 以便在工厂函数中使用
      inject: [ConfigService], // 注入 ConfigService 以便在工厂函数中使用
      // 使用工厂函数动态生成数据库配置
      useFactory: async (configService: ConfigService) => {
        // 1. 一次性取出整个 database 配置对象
        const dbConfig = configService.get('database');

        // 2. 直接返回整个对象，确保“原汁原味”
        // 优势：可以避免属性遗漏，初次测试自动生成数据库时，遗漏了entities属性，导致无法创建表
        return {
          ...dbConfig,
          // 如果有需要在这里临时覆盖的，再写在下面
          // synchronize: true, 
          type: configService.get<'mysql' | 'postgres' | 'sqlite'>('database.type'),
          host: configService.get<string>('database.host'),
          port: configService.get<number>('database.port'),
          username: configService.get<string>('database.username'),
          password: configService.get<string>('database.password'),
          database: configService.get<string>('database.database'),
          // entities:[User],
          // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          logging: configService.get<boolean>('database.logging'),
          autoLoadEntities: true, // 开启这个开关，它会自动去搜集所有 forFeature 注册的实体 他不需要重复配置，我们在database.config.ts里已经配置过。最终这个属性都会给TypeOrmModule使用。鉴于前面没有直接解构database.config.ts，所以这里启用
          synchronize: configService.get<boolean>('database.synchronize'),

        };
      }
      // 或者如下
      // useFactory: (configService: ConfigService) => {
      /**
       * 这里获取我们在 database.config.ts 中定义的 'database' 命名空间内容。
       * 这样做的好处是：AppModule 不需要知道具体的数据库配置细节，
       * 它只负责从 ConfigService 中拿到已经处理好的配置对象。
       */
      //   return configService.get('database');
      // },
      // useFactory: (configService: ConfigService) => {
      //   // 纯验证使用的工厂函数
      //   const fromConfig = configService.get('database');

      //   console.log('--- 验证开始 ---');
      //   console.log('1. 来自配置文件的对象内容:', fromConfig);
      //   console.log('2. 配置文件里 entities 数组的长度:', fromConfig?.entities?.length);
      //   console.log('3. 数组第一个元素是不是 User 类:', fromConfig?.entities?.[0] === User);
      //   console.log(configService.get('database').entities[0].isMyCheck, '--- 验证结束 ---');
      //   return fromConfig;
      // }
    }),
    // 完整的逻辑链路（它们是如何协作的）：

    // 启动阶段：ConfigModule 启动，扫描 .env，运行 database.config.ts 里的函数，将结果存在内部。

    // 注入阶段：TypeOrmModule.forRootAsync 看到自己需要 ConfigService，于是 NestJS 把已经准备好的 ConfigService 递给它。

    // 运行阶段：useFactory 被触发，从 ConfigService 拿到具体的数据库参数，TypeORM 正式发起数据库连接。
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
