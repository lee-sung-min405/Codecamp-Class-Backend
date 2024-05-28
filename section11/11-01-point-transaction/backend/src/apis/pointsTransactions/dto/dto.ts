import { User } from "src/apis/users/entities/user.entity";

export class CreatePointTransactionDto {
    impUid: string;
    amount: number;
    user:User
  }
  