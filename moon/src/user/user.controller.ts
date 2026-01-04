import  {Controller, Get, Post, Body, Param} from '@nestjs/common';
import {UserService} from './user.service';
@Controller('/users') // 此处使用参数users作为路由前缀
export class UserController {
  constructor(protected userService: UserService) {} //private readonly与protected的区别在于private只能在类的内部访问，而protected允许在子类中访问
  //readonly表示属性在初始化后不能被修改
  @Post() // 处理POST请求，创建新用户
  createUser(@Body() createUserDto) { //body与requestbody的区别在于body是express的请求体，而requestbody是nestjs的装饰器，用于提取请求体数据
    console.log('接收到数据:', createUserDto); // 看看控制台有没有打印
  // return { message: '请求成功了', data: createUserDto };
    return this.userService.createUser(createUserDto);
  }
  @Get() // 处理GET请求，获取所有用户
  findAllUsers() {
    return this.userService.findAllUsers();
  }
  @Get(':id') // 处理GET请求，获取指定ID的用户
  findUserById(@Param('id') id: string) { // 使用@Param装饰器提取路由参数,即数据提取
    return { message: `获取ID为${id}的用户` };
  }
}