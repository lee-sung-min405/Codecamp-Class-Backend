import { Product } from "src/apis/products/entites/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class ProductTag{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column()
    name:string;

    @OneToMany(() => Product, (protects) => protects.productTags)
    protects : Product[]
}