import { IsEmail, IsString, Matches, MinLength } from 'class-validator';
// dto文件被视为数据传输对象，用于定义和验证传入的数据结构。在nest中，被当作值、对象，因此不需要使用@Injectable装饰器
// dto文件通常用于定义请求体的结构和验证规则，确保传入的数据符合预期格式和要求
// 通过使用类验证器（class-validator）库中的装饰器，可以为dto类的属性添加验证规则，例如字符串类型、电子邮件格式、最小长度等
// 这些验证规则在处理请求时会自动应用，确保传入的数据符合预期，从而提高应用程序的健壮性和安全性
import { ApiProperty } from '@nestjs/swagger'; // 导入 ApiProperty 装饰器以用于 Swagger 文档生成
export class CreateUserDto {
  // @ApiProperty 用于dto文件内，接口的“内电路规格”：定义具体的字段名、类型、是不是必填、示例值（Example）。
  @ApiProperty({ description: '用户名', example: '张三' }) //description用于描述该属性在Swagger文档中的含义 example用于提供示例值
  @IsString()
  username: string;
  @ApiProperty({ description: '邮箱', example: 'test@gmail.com' })
  @IsEmail({}, { message: '邮箱格式不正确' })
  email: string;
  @ApiProperty({ description: '密码', example: 'M6_Future_2026' ,minLength:8})
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: '密码强度不足：需包含大小写字母及数字/特殊符号',
  })
  password: string;
}