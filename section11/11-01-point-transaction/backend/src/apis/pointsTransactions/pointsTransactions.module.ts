import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointsTransactionsService } from './pointsTransactions.service';
import { PointTransaction } from './entities/pointTransaction.entity';

import { User } from '../users/entities/user.entity';
import { PointsTransactionsController } from './pointsTransactions.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PointTransaction,
      User,
    ]),
  ],
  controllers: [
    PointsTransactionsController,
  ],
  providers: [
    PointsTransactionsService,
  ],
})
export class PointsTransactionsModule {}
