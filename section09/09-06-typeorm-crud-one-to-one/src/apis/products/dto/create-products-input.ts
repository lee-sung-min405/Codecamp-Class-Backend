import { Min } from "class-validator";
import { ProductSalesLocationInput } from "src/apis/productsSaleslocations/dto/product-saleslocation.input";

// create-products.input.ts
export class CreateProductsDto {
    name: string;
    
    description: string;

    @Min(0)
    price: number;

    productSalesLocation: ProductSalesLocationInput;
  }