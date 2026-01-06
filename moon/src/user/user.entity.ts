import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { Exclude } from "class-transformer";

@Entity() // 定义一个实体类，映射到数据库中的表
export class User {
  @PrimaryGeneratedColumn() // 主键，自动生成的唯一标识符
  id: number;
  @Column() // 普通列，存储用户名
  username: string;
  @Column() // 普通列，存储用户邮箱
  email: string;
  @Exclude()// 序列化层面：防误发、终极脱敏 controller--->前端用户侧过程中神效
  //   作用阶段：服务器 → 客户端（前端）（JSON 序列化阶段）。

  // 功能：告诉 NestJS 的 ClassSerializerInterceptor，在把对象转成字符串发给前端时，把这个字段删掉。

  // 意义：

  //     终极兜底：即便你在 Service 里为了校验密码而显式 select 了它，或者在逻辑处理时不小心把完整的 user 对象直接 return 了，这道防线也能确保密码不会流向互联网。

  // 局限：它不影响数据库查询效率，密码还是会被查到服务器内存里。
  @Column({ select: false }) // 普通列，存储用户密码 且在查询时默认不返回该字段 // 数据库层面：省流量、防误抓
  //   作用阶段：数据库 → 服务器（SQL 执行阶段）。

  // 功能：告诉 TypeORM 在生成 SQL 语句时，不要包含这个字段。

  // 意义：

  //     性能：减少数据库 IO 和网络传输。

  //     安全：确保数据从数据库拉取到内存的那一刻起，默认就是不含敏感信息的。

  // 局限：如果你手动写了 select: ['password']，这道防线就会被你主动撤销。
  password: string;
  @Column({ default: true }) // 普通列，存储用户是否激活，默认值为 true
  isActive: boolean;
  // @Column() // 普通列，存储创建时间
  @CreateDateColumn() // 使用 TypeORM 提供的装饰器，自动管理创建时间
  createdAt: Date;
  // @Column() // 普通列，存储更新时间
  @UpdateDateColumn() // 使用 TypeORM 提供的装饰器，自动管理更新时间
  updatedAt: Date;
}