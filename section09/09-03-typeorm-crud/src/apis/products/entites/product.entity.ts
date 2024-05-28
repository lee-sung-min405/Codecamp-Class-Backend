import { ProductCategory } from "src/apis/productsCategoryies/entites/productCategoryies.entity";
import { ProductSaleslocation } from "src/apis/productsSaleslocations/entites/productSaleslocations.entites";
import { ProductTag } from "src/apis/productsTags/entites/productsTags.entites";
import { User } from "src/apis/users/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Product{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column()
    name:string;

    @Column()
    description:string;

    @Column()
    price:number;

    @Column({default : false})
    isSoldout:boolean;

    @JoinColumn()
    @OneToOne(()=> ProductSaleslocation)
    productSaleslocation: ProductSaleslocation;

    @ManyToOne(() => ProductCategory)
    ProductCategory: ProductCategory;

    @ManyToOne(() => User)
    User : User;

    @JoinTable()
    @ManyToMany(() => ProductTag, (protectTags) => protectTags.protects)
    protectTags : ProductTag[];
}