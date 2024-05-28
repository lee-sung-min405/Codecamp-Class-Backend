import { Body, Controller, Get, Post, Param } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductsDto } from "./dto/create-products-input";
import { Product } from "./entites/product.entity";
import { UpdateProductsDto } from "./dto/update-products.input";

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
    ):Promise<Product> {
        return this.productsService.create({ createProductsDto });
    }

    @Post('/UpdateProducts/:productId')
    updateProduct(
        @Param('productId') productId: string,
        @Body() updateProductInput: UpdateProductsDto,
    ):Promise<Product>{
        return this.productsService.update({productId, updateProductInput})
    }
}