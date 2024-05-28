import { Body, Controller, Get, Post, Param } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductsDto } from "./entites/products.dto";
import { Product } from "./entites/product.entity";

@Controller('/products')
export class ProductsResolver {
    constructor(private readonly productsService: ProductsService) {}

    @Get('/fetchProduct/:productId')
    fetchProduct(@Param('productId') productId: string) :Promise<Product> {
        return this.productsService.findOne(productId);
    }
    
    @Get('/fetchProducts')
    fetchProducts():Promise<Product[]> {
        return this.productsService.findAll();
    }   

    @Post('/createProducts')
    createProducts(
      @Body() createProductsDto: CreateProductsDto
    ) {
        return this.productsService.create({ createProductsDto });
    }
}