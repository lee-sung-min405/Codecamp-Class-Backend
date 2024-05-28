import { Injectable } from "@nestjs/common";
import { CreateProductsDto } from "./entites/products.dto";
import { Repository } from "typeorm";
import { Product } from "./entites/product.entity";
import { InjectRepository } from "@nestjs/typeorm";

interface IProductsServiceCreate {
    createProductsDto: CreateProductsDto;
}

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) {}

    findAll():Promise<Product[]> {
        return this.productRepository.find();
    }

    findOne(productId: string):Promise<Product> {
        return this.productRepository.findOne({ where: { id: productId } });
    }

    create({ createProductsDto }: IProductsServiceCreate) {
        const result = this.productRepository.save({
            ...createProductsDto
        });
        return result;
    }
}
