import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsDto } from './create-products-input';

// update-products.input.ts
export class UpdateProductsDto extends PartialType(CreateProductsDto) {
    // 아래 내용들을 상속 받음
    // name?: string;
    // description?: string;

    // @Min(0)
    // price?: number;
}
