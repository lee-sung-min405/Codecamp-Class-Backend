import { Injectable } from "@nestjs/common";
import { In, Repository } from "typeorm";
import { ProductTag } from "./entites/productsTags.entites";
import { InjectRepository } from "@nestjs/typeorm";
import { IProductsTagsServiceBulkInsert, IProductsTagsServiceFindByNames } from "./interfaces/product-tags-service-interface";

@Injectable()
export class ProductsTagsService{

    constructor(
        @InjectRepository(ProductTag)
        private readonly productTagsRepository:Repository<ProductTag>
    ){}

    findByNames({tagNames}: IProductsTagsServiceFindByNames){
        return this.productTagsRepository.find({
            where:{name: In(tagNames)},
        });
    }

    bulkInsert({names}:IProductsTagsServiceBulkInsert){
        return this.productTagsRepository.insert(names);
    }
}
