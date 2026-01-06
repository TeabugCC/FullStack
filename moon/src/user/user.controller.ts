import { Controller, Get, Post, Body, Param, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

// @ApiTags/@ApiOperation/@ApiResponse 用于controller文件 接口的“引脚定义”：告诉外界这个接口叫什么、属于哪个模块、返回什么 HTTP 状态码。
import { CreateUserDto } from './dto/create-user.dto';
@ApiTags('users') // 用于给控制器添加标签，方便在Swagger文档中进行分类 
@Controller('/users') // 此处使用参数users作为路由前缀
export class UserController {
  constructor(protected userService: UserService) { } //private readonly与protected的区别在于private只能在类的内部访问，而protected允许在子类中访问
  //readonly表示属性在初始化后不能被修改
  @Post() // 处理POST请求，创建新用户
  @ApiOperation({ summary: '创建新用户', description: 'description---创建一个新用户' }) //在Swagger文档中显示  summary用于描述该接口的操作摘要， description
  @ApiResponse({ status: 201, description: '用户创建成功' }) //描述成功响应的HTTP状态码和含义
  @ApiResponse({ status: 400, description: '参数错误' })
  @UseInterceptors(ClassSerializerInterceptor)// 用于在控制器方法中启用类序列化拦截器，确保响应数据经过类转换处理 ,如排除敏感字段等。需要配合实体类中的@Exclude等装饰器使用。或者全局配置
  createUser(@Body() createUserDto: CreateUserDto) { //body与requestbody的区别在于body是express的请求体，而requestbody是nestjs的装饰器，用于提取请求体数据
    console.log('register 接收到数据:', createUserDto); // 看看控制台有没有打印
    // return { message: '请求成功了', data: createUserDto };
    return this.userService.createUser(createUserDto);
  }
  @Get() // 处理GET请求，获取所有用户
  @ApiOperation({ summary: '获取全部用户' })
  findAllUsers() {
    return this.userService.findAllUsers();
  }
  @Get(':id') // 处理GET请求，获取指定ID的用户
  @ApiOperation({ summary: '根据用户ID获取用户信息' })
  findUserById(@Param('id') id: string) { // 使用@Param装饰器提取路由参数,即数据提取
    return { message: `获取ID为${id}的用户` };
  }
  @Post('login')
  @ApiOperation({ summary: '用户登录' })
  async login(@Body() body: any) {
    console.log('login 接收到数据:', body);
    const user = await this.userService.findUserByUsername(body); {
      // 即使 Service 返回的对象里带有 password 属性
      // 拦截器也会根据 Entity 里的 @Exclude() 把它剔除掉
      if (!user) {
        // throw new UnauthorizedException('用户名或密码错误');
      }
      return user
    }
  }
}