import { Min } from "class-validator";

// create-products.input.ts
export class CreateProductsDto {
    name: string;
    description: string;

    @Min(0)
    price: number;
  }