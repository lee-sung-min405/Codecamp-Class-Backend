import { CreateProductsDto } from "../dto/create-products-input";
import { UpdateProductsDto } from "../dto/update-products.input";
import { Product } from "../entites/product.entity";

export interface IProductsServiceCreate {
    createProductsDto: CreateProductsDto;
}
export interface IProductsServiceUpdate{
    productId:string;
    updateProductInput : UpdateProductsDto;
}

export interface IProductsServiceCheckSoldOut{
    product : Product;
}