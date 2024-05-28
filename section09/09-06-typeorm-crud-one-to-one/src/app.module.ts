import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './apis/boards/entities/board.entity';
import { BoardsModule } from './apis/boards/boards.module'; // BoardsModule을 임포트합니다.
import { User } from './apis/users/entities/user.entity';
import { Product } from './apis/products/entites/product.entity';
import { ProductCategory } from './apis/productsCategoryies/entites/productCategoryies.entity';
import { ProductSalesLocation } from './apis/productsSaleslocations/entites/productSaleslocations.entites';
import { ProductTag } from './apis/productsTags/entites/productsTags.entites';
import { ProductsModule } from './apis/products/products.module';

@Module({
  imports: 
  [
    TypeOrmModule.forRoot({
      type: "mariadb",
      host: "localhost", // 도커를 로컬에서 실행하는 경우
      port: 3306,
      username: "root", // 실제 사용자 이름으로 변경
      password: "aroundhub12#", // 실제 비밀번호로 변경
      database: "myProject", // 실제 데이터베이스 이름으로 변경
      entities: [Board, Product, ProductCategory, ProductSalesLocation, ProductTag, User], // 엔티티 파일 경로
      // entities: [__dirname + "/apis/**/*.entity.js"], // 엔티티 파일 경로
      synchronize: true, // (MariaDB 동기화) 개발 환경에서만 true로 설정. 프로덕션에서는 false로 설정
      logging:true,
    }),
    BoardsModule, // BoardsModule을 추가
    ProductsModule, // productModule 을 추가
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
