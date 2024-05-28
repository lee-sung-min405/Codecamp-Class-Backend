import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ProductsCategoriesService } from "./productCategories.service";
import { CreateCategoriesDto } from "./dto/create-categories";
import { ProductCategory } from "./entites/productCategoryies.entity";


@Controller('/products')
export class ProductCategoriesResolver {
    constructor(
        private readonly ProductsCategoriesService: ProductsCategoriesService,
    ){}

    // @Get('/fetchCategory/:categoriesId')
    // fetchCategory(@Param('categoriesId') categoriesId: string) :Promise<ProductCategory> {
    //     return this.ProductsCategoriesService.findOne(categoriesId);
    // }

    // @Get('/fetchCategories')
    // fetchCategories():Promise<ProductCategory[]> {
    //     return this.ProductsCategoriesService.findAll();
    // }   

    @Post('/createCategories')
    createCategory(
        @Body() createCategoryInput: CreateCategoriesDto,
    ): Promise<ProductCategory> {
        return this.ProductsCategoriesService.create(createCategoryInput);
    }
    //Docs
    // {
    //     "name":"신발2"
    // }
}
