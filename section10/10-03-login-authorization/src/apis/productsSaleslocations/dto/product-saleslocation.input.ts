import { OmitType } from "@nestjs/swagger";
import { PartialType } from "@nestjs/mapped-types";
import { ProductSalesLocation } from "../entites/productSaleslocations.entites";


export class ProductSalesLocationInput extends PartialType(
  OmitType(ProductSalesLocation, ['id'] as const),
) {}
