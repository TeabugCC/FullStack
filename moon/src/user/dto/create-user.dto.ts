import { IsEmail, IsString, MinLength } from 'class-validator';
// dto文件被视为数据传输对象，用于定义和验证传入的数据结构。在nest中，被当作值、对象，因此不需要使用@Injectable装饰器
// dto文件通常用于定义请求体的结构和验证规则，确保传入的数据符合预期格式和要求
// 通过使用类验证器（class-validator）库中的装饰器，可以为dto类的属性添加验证规则，例如字符串类型、电子邮件格式、最小长度等
// 这些验证规则在处理请求时会自动应用，确保传入的数据符合预期，从而提高应用程序的健壮性和安全性
export class CreateUserDto {
  @IsString()
  username: string;
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}