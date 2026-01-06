import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) // 注入User实体对应的存储库
    private userRepository: Repository<User> // TypeORM的Repository模式
  ) { }
  private users = []; // 用于存储用户数据的数组
  // Repository Pattern（仓库模式）是一种设计模式，用于抽象数据访问层，提供对数据库操作的统一接口
  createUser(createUserDto: CreateUserDto) {
    // 永远不要在日志（Logger）里打印 req.body，否则密码会出现在日志文件里。
    // const newUser = { id: Date.now(), ...createUserDto };
    // this.users.push(newUser);
    // return newUser;
    const newUser = this.userRepository.create(createUserDto); // 创建一个新的用户实体实例。此时还没有进行数据库保存 。即创建待入库对象
    const saltOrRounds = 10; // 定义盐的轮数，用于密码哈希
    const hashedPassword = bcrypt.hashSync(createUserDto.password, saltOrRounds);
    // 多此一举的原因在于，如果在Entity里定义了一些默认值或者钩子函数（如@beforeInsert），使用create方法可以确保这些逻辑被正确应用
    return this.userRepository.save({ ...newUser, password: hashedPassword }); // 将新用户保存到数据库中 并返回保存后的用户实体，即入库
  }
  findAllUsers() {
    return this?.users;
  }
  async findUserByUsername({ username, password }) {
    const user = await this.userRepository.findOne({ where: { username }, select: ['id', 'username', 'email', 'password'] });
    console.log('service user', user);
    // return { message: `获取username为${username}的用户` };
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password)
      if(isMatch){
        delete user.password; // 删除密码字段，避免泄露
        return user;
      }
    } else {
      throw new Error('用户不存在');
    }
  }
}