import { ProductCategory } from "src/apis/productsCategoryies/entites/productCategoryies.entity";
import { ProductSalesLocation } from "src/apis/productsSaleslocations/entites/productSaleslocations.entites";
import { ProductTag } from "src/apis/productsTags/entites/productsTags.entites";
import { User } from "src/apis/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

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

    @OneToOne(() => ProductSalesLocation, (ProductSalesLocation) => ProductSalesLocation.product, { cascade: true })
    @JoinColumn()
    ProductSalesLocation: ProductSalesLocation;

    @ManyToOne(() => ProductCategory)
    ProductCategory: ProductCategory;

    @ManyToOne(() => User)
    User : User;

    @JoinTable()
    @ManyToMany(() => ProductTag, (protectTags) => protectTags.protects)
    protectTags : ProductTag[];

    // @CreateDateColumn() //데이터 등록시 등록시간 자동으로 추가
    // createAt : Date;

    // @UpdateDateColumn() //데이터 수정시 수정 시간 자동으로 추가
    // updateAt : Date;

    @DeleteDateColumn() //소프트 삭제 시간 기록을 위함
    deletedAt : Date;
}