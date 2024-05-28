import { Body, Controller, Get, Post, Param, Delete } from "@nestjs/common";
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
    // createProducts Docs
    // {
    //   "name": "마우스3",
    //   "description": "정말 좋은 마우스3",
    //   "price": 3000,
    //   "productSalesLocation": {
    //   "address": "구로3",
    //   "addressDetail": "구로역3",
    //   "lat": 10.3,
    //   "lng": 20.2,
    //   "meetingTime": "2022-10-10"
    //   },
    //   "productCategoryId": "782529bf-1d97-44c0-a82d-8fde88b5b957",
    //   "productTags":["#123전자제품1", "#2123영등포", "#123컴퓨터"]
    // }


    @Post('/UpdateProducts/:productId')
    updateProduct(
        @Param('productId') productId: string,
        @Body() updateProductInput: UpdateProductsDto,
    ):Promise<Product>{
        return this.productsService.update({productId, updateProductInput})
    }

    @Delete('/deleteProduct/:productId')
    async deleteProduct(
        @Param('productId') productId: string,
    ): Promise<boolean> {
        return await  this.productsService.delete({productId})
    }
}