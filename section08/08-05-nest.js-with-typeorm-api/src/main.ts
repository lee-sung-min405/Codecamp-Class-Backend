import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Swagger 설정을 위한 import 추가
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Swagger 설정
  const config = new DocumentBuilder()
    .setTitle('Boards API')
    .setDescription('The boards API description')
    .setVersion('1.0')
    .addTag('boards', '게시판 관련 API') // 여기에 설명을 추가했습니다.
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('restApi', app, document);

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
