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
  await app.listen(3000);
}
bootstrap();
