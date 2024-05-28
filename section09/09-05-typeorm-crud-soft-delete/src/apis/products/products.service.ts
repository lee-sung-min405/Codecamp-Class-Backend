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

    async delete({productId}: IProductsServiceDelete): Promise<boolean> {
        //1. 실제 삭제
        // const result = await this.productRepository.delete({id : productId})
        // return result.affected ? true : false

        //2.소프트 삭제(직접 구현) - isDeleted
        // this.productRepository.update({id:productId}, {isDeleted:true})
        // find({where : {isDeleted:true}})

        //3. 소프트 삭제(직접 구현) - deletedAt
        // this.productRepository.update({id:productId}, {deletedAt:new Date()})
        // find({where : {deletedAt : null}})

        //4. 소프트 삭제(TypeOrm 제공) - softRemove
        //this.productRepository.softRemove({id:productId}) //단점 : id로만 삭제 가능
                                                            //장점 :여러ID 한번에 지우기 가능
                                                          //     .softRemove([{id: qqq},{id: aaa},{id: zzz}])

        //5. 소프트 삭제(TypeOrm 제공) - softDelete
        const result = await this.productRepository.softDelete({id:productId}) //단점 : 여러ID 한번에 지우기 불가능
                                                                               //장점 : 다른 컬럼으로도 삭제 가능
        return result.affected ? true : false;
    }
}

interface IProductsServiceDelete{
    productId: string
}