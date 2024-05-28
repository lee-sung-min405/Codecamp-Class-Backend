import { Module } from "@nestjs/common";
import { ProductsResolver } from "./products.resolver";
import { ProductsService } from "./products.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entites/product.entity";
import { ProductsSalesLocationsService } from "../productsSaleslocations/productsSaleslocations.service";
import { ProductSalesLocation } from "../productsSaleslocations/entites/productSaleslocations.entites";
import { ProductCategory } from "../productsCategoryies/entites/productCategoryies.entity";
import { ProductsCategoriesService } from "../productsCategoryies/productCategories.service";
import { ProductsTagsService } from "../productsTags/productsTags.service";
import { ProductTag } from "../productsTags/entites/productsTags.entites";

@Module({
    imports: [
      TypeOrmModule.forFeature([
        Product,
        ProductSalesLocation,
        ProductCategory,
        ProductTag,
      ])], // 필요한 경우

    controllers: [ProductsResolver], // ProductsResolver 등록 확인
    providers: 
    [ ProductsService, 
      ProductsSalesLocationsService, 
      ProductsCategoriesService,
      ProductsTagsService], // ProductsService 등록 확인
  })
  export class ProductsModule {}