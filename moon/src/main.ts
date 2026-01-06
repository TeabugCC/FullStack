// import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';// 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局启用验证管道
  app.useGlobalPipes(new ValidationPipe());
  // 如果你有这个全局前缀，请记住它，这关系到前端 404 问题
  // app.setGlobalPrefix('api');
  // 配置swagger参数
  const config = new DocumentBuilder().setTitle('M6 全栈时代 API').setDescription('M6 全栈时代 项目接口文档').setVersion('1.0').addTag('用户登记注册等').build();
  // 创建swagger文档
  const document = SwaggerModule.createDocument(app, config);
  // 设置swagger文档的访问路径
  SwaggerModule.setup('api-docs', app, document);
  // main.ts 全局配置 ClassSerializerInterceptor，用作拦截器拦截各种配置@Exclude的字段。此处注销，是因为在现代的后端开发中，更推荐在具体的控制器或方法上使用 ClassSerializerInterceptor 拦截器，以实现更细粒度的控制和更好的代码可读性。或者在app.module.ts中全局配置
// const { Reflector } = app.get(HttpAdapterHost);
// app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  await app.listen(3000);
}
bootstrap();
