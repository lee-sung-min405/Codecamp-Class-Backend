import { Injectable } from '@nestjs/common';
import { POINT_TRANSACTION_STATUS_ENUM, PointTransaction } from './entities/pointTransaction.entity';
import { IPointsTransactionsServiceCreate } from './interfaces/points-transactions-service.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class PointsTransactionsService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointsTransactionsRepository: Repository<PointTransaction>,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create({
    impUid,
    amount,
    user: _user,
  }: IPointsTransactionsServiceCreate): Promise<PointTransaction> {
    // 디버깅 로그 추가
    console.log('1. PointTransaction 개체 생성', impUid, amount, _user.userId);

    // 1. PointTransaction 객체 생성
    const pointTransaction = this.pointsTransactionsRepository.create({
      impUid,
      amount,
      user: _user.userId,  // 관계 설정을 위해 user 객체를 포함
      status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
    });

    // 디버깅 로그 추가
    console.log('2. PointTransaction 개체 저장 중', impUid, amount, _user, pointTransaction);

    // 2. PointTransaction 테이블에 거래기록 1줄 생성
    await this.pointsTransactionsRepository.save(pointTransaction);

    // 디버깅 로그 추가
    console.log('3. ID로 사용자 찾기:',  _user.userId);

    // 3. 유저의 돈 찾아오기
    const user = await this.usersRepository.findOne({
      where: { id: _user.id },
    });

    if (!user) {
      console.error('User not found:', _user.userId);
      throw new Error('User not found');
    }

    // 디버깅 로그 추가
    console.log(`4. Updating user ${user.id} point from ${user.point} to ${user.point + amount}`);

    // 4. 유저의 돈 업데이트
    const newPoint = user.point + amount;
    await this.usersRepository.update(user.id, { point: newPoint });

    // 디버깅 로그 추가
    console.log('5. 사용자 포인트 업데이트');

    // 5. 최종결과 브라우저에 돌려주기
    return pointTransaction;
  }
}
