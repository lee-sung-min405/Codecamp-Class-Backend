import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Swagger 설정을 위한 import 추가
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './apis/commons/filter/http-exception.filter';

//쿠키 파서 설정
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //각종 예외 및 오류 잡는 부분
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

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
  
  app.use(cookieParser()); // 쿠키 파서 미들웨어 사용
  await app.listen(3000);
}
bootstrap();
