import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductCategory } from "./entites/productCategoryies.entity";
import { ProductCategoriesResolver } from "./productCategories.resolver";
import { ProductsCategoriesService } from "./productCategories.service";

@Module({
    imports: [
      TypeOrmModule.forFeature([
        ProductCategory,
      ])], // 필요한 경우

    controllers: [ProductCategoriesResolver], // ProductsResolver 등록 확인
    providers: [ProductsCategoriesService], // ProductsService 등록 확인
  })
  export class ProductsCategoriesModule {}