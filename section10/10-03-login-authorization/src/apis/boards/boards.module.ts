// boards.module.ts
import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsResolver } from './boards.resolver';
import { BoardsController } from './swagger/boards.swagger';

@Module({
    controllers: [BoardsResolver, BoardsController], // 수정: 객체가 아닌 배열 요소로 포함
    providers: [BoardsService],
  })
export class BoardsModule {}
