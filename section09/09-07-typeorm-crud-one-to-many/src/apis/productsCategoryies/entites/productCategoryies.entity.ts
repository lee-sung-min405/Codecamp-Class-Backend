import { Product } from "src/apis/products/entites/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class ProductCategory{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column({unique:true})
    name:string;

    // @ManyToOne(() => Product, (Product) => Product.productCategory)
    // product: Product;
}