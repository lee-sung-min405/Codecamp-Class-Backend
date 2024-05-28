import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Product } from "./entites/product.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { IProductsServiceCreate, IProductsServiceUpdate } from "./interface/interface";


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

    async update({productId, updateProductInput}: IProductsServiceUpdate):Promise<Product>{

        const product = await this.productRepository.findOne({where : {id:productId}})

        if(product.isSoldout){
            throw new UnprocessableEntityException("이미 판매 완료된 상품입니다.")
        }

        // if(product.isSoldout){
        //     throw new HttpException("이미 판매 완료된 상품입니다.", HttpStatus.UNPROCESSABLE_ENTITY)
        // }

        const result = this.productRepository.save({
            ...product, //수정 후, 수정되지 않은 다른 결과값까지 모두 객체로 돌려 받고 싶을 때
            ...updateProductInput,
        })

        // this.productRepository.create() //DB 접속이랑 관련 없음. 등록을 위해서 빈 껍데기 객체를 만들기 위함
        // this.productRepository.insert() //결과를 객체로 못 돌려 받는 등록 방법
        // this.productRepository.update() //결과를 객체로 못 돌려 받는 수정 방법
        return result;
    }
}
