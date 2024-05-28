import { Entity, Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { User } from '../../users/entities/user.entity';

export enum POINT_TRANSACTION_STATUS_ENUM {
  PAYMENT = 'PAYMENT',
  CANCEL = 'CANCEL',
}

@Entity()
export class PointTransaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  impUid: string;

  @Column()
  amount: number;

  @Column({ type: 'enum', enum: POINT_TRANSACTION_STATUS_ENUM })
  status: POINT_TRANSACTION_STATUS_ENUM;

  @ManyToOne(() => User, user => user.pointTransactions)
  user: User;


  @CreateDateColumn()
  createdAt: Date;
}
