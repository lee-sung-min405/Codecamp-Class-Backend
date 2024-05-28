import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductCategory } from "./entites/productCategoryies.entity";
import { CreateCategoriesDto } from "./dto/create-categories";



@Injectable()
export class ProductsCategoriesService {

    constructor(
        @InjectRepository(ProductCategory) // 올바른 엔티티 주입
        private readonly productsCategoriesRepository: Repository<ProductCategory>,
    ) {}

    // findAll():Promise<ProductCategory[]> {
    //     return this.productsCategoriesRepository.find({
    //         relations:['productsCategoriesRepository']
    //     });
    // }

    // findOne(productId: string):Promise<ProductCategory> {
    //     return this.productsCategoriesRepository.findOne({ 
    //         where: { id: productId },
    //         relations:['productsCategoriesRepository']
    //      });
    // }

    async create({name}:any): Promise<ProductCategory> {
        const result = await this.productsCategoriesRepository.save({
            name
        })
        return result;
    }
}


