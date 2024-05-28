import { Module } from "@nestjs/common";
import { ProductsResolver } from "./products.resolver";
import { ProductsService } from "./products.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entites/product.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Product])], // 필요한 경우
    controllers: [ProductsResolver], // ProductsResolver 등록 확인
    providers: [ProductsService], // ProductsService 등록 확인
  })
  export class ProductsModule {}
  