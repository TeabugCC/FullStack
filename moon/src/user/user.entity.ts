import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";

@Entity() // 定义一个实体类，映射到数据库中的表
export class User {
  @PrimaryGeneratedColumn() // 主键，自动生成的唯一标识符
  id: number;
  @Column() // 普通列，存储用户名
  username: string;
  @Column() // 普通列，存储用户邮箱
  email: string;
  @Column() // 普通列，存储用户密码
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