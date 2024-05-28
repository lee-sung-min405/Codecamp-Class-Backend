import { Product } from "src/apis/products/entites/product.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class ProductTag{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column()
    name:string;

    @OneToMany(() => Product, (protects) => protects.protectTags)
    protects : Product[]
}