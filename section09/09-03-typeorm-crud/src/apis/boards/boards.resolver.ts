import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './entities/boards.dto';
import { Board } from './entities/board.entity';


@Controller('/boards')
export class BoardsResolver {
  constructor(private readonly boardsService: BoardsService) {}

  @Get('/fetchBoards')
  fetchBoards(): Board[] {
    return this.boardsService.findAll();
  }

  @Post('/createBoard')
  createBoard(
    @Body() createBoardDto: CreateBoardDto
  ): string {
    return this.boardsService.create(createBoardDto);
  }
}