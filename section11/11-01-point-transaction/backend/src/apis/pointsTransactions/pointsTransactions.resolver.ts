import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { PointsTransactionsService } from './pointsTransactions.service';
import { PointTransaction } from './entities/pointTransaction.entity';
import { Request } from 'express';
import { JwtAuthGuard } from './jwt-auth.guard';
import { User } from '../users/entities/user.entity';

@Controller('/points-transactions')
export class PointsTransactionsController {
  constructor(
    private readonly pointsTransactionsService: PointsTransactionsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createPointTransaction(
    @Body('impUid') impUid: string,
    @Body('amount') amount: number,
    @Req() request: Request,
  ): Promise<PointTransaction> {
    console.log('Request user:', request.user);  // 디버깅 로그 추가
    const user = request.user as User;
    return this.pointsTransactionsService.create({ impUid, amount, user });
  }
}
