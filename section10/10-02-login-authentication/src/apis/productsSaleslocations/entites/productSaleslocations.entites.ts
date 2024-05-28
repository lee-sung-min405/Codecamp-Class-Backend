import { IsString, IsDateString } from "class-validator";
import { Product } from "src/apis/products/entites/product.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";

@Entity('product_saleslocation')
export class ProductSalesLocation {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @IsString()
  @Column({ default: '기본 주소' }) // 기본 주소로 수정
  address: string;

  @IsString()
  @Column({ default: '기본 주소 상세' }) // 기본 주소 상세로 수정
  addressDetail: string;

  @Column("decimal", { precision: 10, scale: 7, default: 0.0 }) // lat의 기본값을 0.0으로 수정
  lat: number;

  @Column("decimal", { precision: 10, scale: 7, default: 0.0 }) // lng의 기본값을 0.0으로 수정
  lng: number;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' }) // meetingTime의 기본값을 현재 시간으로 수정
  meetingTime: Date;

  @OneToOne(() => Product, (Product) => Product.productSalesLocation) // 수정 없음
  product: Product;
}
