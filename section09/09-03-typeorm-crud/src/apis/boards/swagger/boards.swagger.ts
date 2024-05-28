import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('Board') // 컨트롤러 수준에서 태그를 지정합니다.
@Controller('boards')
export class BoardsController {
  
  @Get("fetchBoards")
  @ApiOperation({ summary: '게시글 가져오기' }) // API 연산에 대한 요약 정보를 제공합니다.
  @ApiResponse({ 
    status: 200, 
    description: '성공',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          number: { type: 'integer', example: 1 },
          writer: { type: 'string', example: '철수' },
          title: { type: 'string', example: '좋은아침 입니다~' },
          contents: { type: 'string', example: '오늘 하루도 파이팅 하세요!' },
        },
      },
    },
  })
  getBoards() {
    // 게시글 가져오기 로직 구현
  }

  @Post("createBoard")
  @ApiOperation({ summary: '게시글 등록하기' }) // API 연산에 대한 요약 정보를 제공합니다.
  @ApiParam({
    name: 'writer',
    required: true,
    description: '게시물 작성자',
    type: String,
  })
  @ApiParam({
    name: 'title',
    required: true,
    description: '게시물 제목',
    type: String,
  })
  @ApiParam({
    name: 'contents',
    required: true,
    description: '게시물 내용',
    type: String,
  })
  findOne(
    @Param('title') title: string,
    @Param('contents') contents: string,
    @Param('writer') writer: string,
  ): string {
    // 여기에서  title, contents, writer를 사용하여 필요한 로직을 구현하세요.
    return ` Writer: ${writer}, Title: ${title}, Contents: ${contents}`;
  }

  @ApiResponse({
    status: 200,
    description: '성공 : 게시물 등록에 성공하였습니다.',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          writer: { type: 'string', example: '철수' },
          title: { type: 'string', example: '좋은아침 입니다~' },
          contents: { type: 'string', example: '오늘 하루도 파이팅 하세요!' },
        },
      },
    },
  })
  createBoard() {
    // 게시글 등록 로직 구현
  }
}
