import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PointTransaction } from '../../pointsTransactions/entities/pointTransaction.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @OneToMany(() => PointTransaction, pointTransaction => pointTransaction.user)
  pointTransactions: PointTransaction[];

  @Column({ default: 0 })
  point: number;
}
