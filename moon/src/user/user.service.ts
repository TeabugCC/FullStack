import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) // 注入User实体对应的存储库
    private userRepository: Repository<User> // TypeORM的Repository模式
  ){}
  private users = []; // 用于存储用户数据的数组
  // Repository Pattern（仓库模式）是一种设计模式，用于抽象数据访问层，提供对数据库操作的统一接口
  createUser(createUserDto: CreateUserDto) {
    // const newUser = { id: Date.now(), ...createUserDto };
    // this.users.push(newUser);
    // return newUser;
    const newUser = this.userRepository.create(createUserDto); // 创建一个新的用户实体实例。此时还没有进行数据库保存 。即创建待入库对象
    // 多此一举的原因在于，如果在Entity里定义了一些默认值或者钩子函数（如@beforeInsert），使用create方法可以确保这些逻辑被正确应用
    return this.userRepository.save(newUser); // 将新用户保存到数据库中 并返回保存后的用户实体，即入库
  }
  findAllUsers() {
    return this?.users;
  }
}