// 从 .env 中读取值，进行类型转换（比如字符串转数字），并提供类型提示。
import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// 下方导入user.entity.ts纯测试用，不要删除
import { User } from '../user/user.entity';
console.log('[Step 1] Database Config Loading...');
console.log('[Step 1] User Entity reference:', User); // 关键：看这里输出的是 Function 还是 undefined
/**
 * registerAs 用于定义一个配置命名空间，这里叫 'database'。
 * 这样在其他地方引用时，可以通过 database.host 这种方式访问，结构更清晰。 
 */
// (User as any).isMyCheck = true; // 纯测试用，不要删除，在app.module.ts的工厂函数里输出验证使用了
export default registerAs(
  'database',
  (): TypeOrmModuleOptions => ({
    type: process.env.DB_TYPE as any,// 数据库类型，强制转换为 any 类型以满足 TypeOrmModuleOptions 的要求
    host: process.env.DB_HOST,// 数据库主机地址
    port: parseInt(process.env.DB_PORT, 10),// 数据库端口，转换为数字类型 
    username: process.env.DB_USER,// 数据库用户名
    password: process.env.DB_PASSWORD,// 数据库密码
    database: process.env.DB_NAME,// 数据库名称
    autoLoadEntities: true, // 自动加载实体类，省去手动引入实体的麻烦
    // 自动扫描实体类，.. 表示从当前 config 目录回到 src 目录 
    // 下方配置项会强行要求node去加载制定的entity文件，通过node默认的require（）加载时，无法是被import就报错了
    // entities: [__dirname + '/../**/*.entity{.ts,.js}'],// 实体文件路径 --------> 此举目的是为了让 TypeORM 知道去哪里找实体类，从而映射到数据库表。强烈不推荐此中配置方式，因为node默认是commonJs规范，无法识别ESM的 .ts 后缀文件，也就是无法识别实体类文件（核心是import导入）。推荐使用 autoLoadEntities: true 属性。除非明确在package.json里指定"type":"module"，否则不要使用此配置方式。但是你在package.json里指定"type":"module"后，可能会引发其他兼容性问题，所以推荐使用 autoLoadEntities: true 属性。
    // entities:[User],
    // 自动负载运行后的日志，方便在控制台看到生成的 SQL 语句
    logging: process.env.DB_LOGGING === 'true',// 是否启用日志记录，转换为布尔类型
    // synchronize: 仅在开发环境下设为 true。
    // 生产环境下必须设为 false，否则可能会导致意外的数据丢失。
    synchronize: process.env.DB_SYNC === 'true',// 是否自动同步数据库结构，转换为布尔类型
  }),
);