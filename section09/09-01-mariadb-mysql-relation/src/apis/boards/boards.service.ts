import { Injectable } from '@nestjs/common';
import { Board } from './entities/board.entity';


@Injectable()
export class BoardsService {
  findAll(): Board[] {
    //1. DB에 접속 후, 데이터를 조회 했다고 가정후 result에 저장
    const findBoardResult = [
        {
            number:1,
            writer:'철수',
            title:'제목입니다.1',
            contents:'내용입니다.1'
        },
        {
            number:2,
            writer:'영희',
            title:'제목입니다.2',
            contents:'내용입니다.2'
        },
        {
            number:3,
            writer:'훈이',
            title:'제목입니다.3',
            contents:'내용입니다.3'
        },
    ];

    //2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
    return findBoardResult;
  }

  create(createBoardDto){
    //1. 브라우저에서 보내준 데이터 확인하기
    console.log(createBoardDto.writer);
    console.log(createBoardDto.title);
    console.log(createBoardDto.contents);


    //2. DB에 접속 후, 데이터를 저장 => 데이터 저장했음


    //3. DB에 저장된 결과를 브라우저에 응답(response)
    return "게시물 등록에 성공하였습니다."
  }
}