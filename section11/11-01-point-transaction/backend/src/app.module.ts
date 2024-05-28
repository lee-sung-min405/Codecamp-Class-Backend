import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Board } from './apis/boards/entities/board.entity';
import { BoardsModule } from './apis/boards/boards.module';
import { User } from './apis/users/entities/user.entity';
import { Product } from './apis/products/entites/product.entity';
import { ProductCategory } from './apis/productsCategoryies/entites/productCategoryies.entity';
import { ProductSalesLocation } from './apis/productsSaleslocations/entites/productSaleslocations.entites';
import { ProductTag } from './apis/productsTags/entites/productsTags.entites';
import { ProductsModule } from './apis/products/products.module';
import { ProductsCategoriesModule } from './apis/productsCategoryies/productCategories.module';
import { UsersModule } from './apis/users/users.module';
import { AuthModule } from './apis/auth/auth.module';
import { PointsTransactionsModule } from './apis/pointsTransactions/pointsTransactions.module';
import { PointTransaction } from './apis/pointsTransactions/entities/pointTransaction.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // ConfigModule을 전역으로 설정합니다.
    TypeOrmModule.forRoot({
      type: "mariadb",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "aroundhub12#",
      database: "myProject",
      entities: [Board, Product, ProductCategory, ProductSalesLocation, ProductTag, User, PointTransaction ],
      synchronize: true,
      logging: true,
    }),
    BoardsModule,
    ProductsModule,
    ProductsCategoriesModule,
    UsersModule,
    AuthModule,
    PointsTransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
