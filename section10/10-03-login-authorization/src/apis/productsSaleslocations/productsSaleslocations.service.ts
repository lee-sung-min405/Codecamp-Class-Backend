import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductSalesLocation } from "./entites/productSaleslocations.entites";


@Injectable()
export class ProductsSalesLocationsService {

    constructor(
        @InjectRepository(ProductSalesLocation) // 올바른 엔티티 주입
        private readonly productSalesLocationsRepository: Repository<ProductSalesLocation>,
    ) {}

    async create(productSalesLocation): Promise<ProductSalesLocation> {
        const result = await this.productSalesLocationsRepository.save({
            ...productSalesLocation
        })
        return result;
    }
}


