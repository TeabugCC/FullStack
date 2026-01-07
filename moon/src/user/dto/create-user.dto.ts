import { IsEmail, IsOptional, IsString, Matches, MinLength } from 'class-validator';
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
  @ApiProperty({ description: '密码', example: 'M6_Future_2026', minLength: 8 })
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: '密码强度不足：需包含大小写字母及数字/特殊符号',
  })
  password: string;
}

export class LoginUserDto {
  @ApiProperty({ description: '用户名', example: '张三' })
  @IsString()
  username: string;

  @ApiProperty({ description: '密码', example: 'M6_Future_2026' })
  @IsString()
  password: string;
}
// TODO:如果你已经定义了一个完整的 CreateUserDto，不需要手动去写 UpdateUserDto。NestJS 提供了 PartialType 工具，它会自动把父类中的所有字段变为可选
// TODO: OmitType是静态类型工具，用于从现有类型中创建新类型，省去不需要的字段。例如，可以用它来创建一个不包含密码字段的用户类型，以提高安全性和简化数据传输。与动态的类转换工具（如ClassTransformer）不同，OmitType在编译时就确定了类型结构，而不是在运行时进行转换。
export class LoginResponseDto {
  @ApiProperty({ description: 'JWT访问令牌', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiLlsI_nlKjmiJblj7giLCJpYXQiOjE2ODgwOTU2MDAsImV4cCI6MTY4ODA5OTIwMH0.DXQF1bXkY6v8KX1d4x3Zq9V3Z5vYz3Yz3Zq9V3Z5vYz3Yz3Zq9V3Z5vYz3Yz3' })
  access_token: string;
  @ApiProperty({ description: '用户ID', example: 1 })
  id: number;
  @ApiProperty({ description: '用户名', example: '张三' })
  username: string;
  @ApiProperty({ description: '用户邮箱', example: 'test@gmail.com' })
  email: string;
  @ApiProperty({ description: '用户昵称', example: '张三' })
  @IsOptional() // 标记为可选字段
  nickname?: string;
}