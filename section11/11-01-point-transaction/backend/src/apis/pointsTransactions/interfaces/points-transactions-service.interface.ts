import { User } from "src/apis/users/entities/user.entity";


export interface IPointsTransactionsServiceCreate {
  impUid: string;
  amount: number;
  user: any;  //원래는 스트링 타입으로 지정해주어야함..
}
