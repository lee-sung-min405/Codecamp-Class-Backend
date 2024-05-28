import { Body, Controller, Get, Param, Post, UseGuards, Request } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user-input";
import { AuthGuard } from "@nestjs/passport";

@Controller('/users')
export class UsersResolver{

    constructor(
        
        private readonly usersService : UsersService
    ){}

    @Post('/createUser')
    createUser(
        @Body() createUserDto: CreateUserDto
    ): Promise<User>{
        return this.usersService.create(createUserDto)
    }
    //createUser Docs
    //  {
    //     "email": "test@naver.com",
    //     "password": "testtest",
    //     "name":"오류 없ㅎ라",
    //     "age":30
    //   }
    
    // {
    //     "email": "ft@naver.com",
    //     "password": "ft12345",
    //     "name":"마지막테스트기원",
    //     "age":30
    //   }

    @UseGuards(AuthGuard('jwt')) // 'jwt' 전략을 사용하는 인증 가드를 적용합니다.
    @Get('/fetchUser') // GET /users/profile 엔드포인트를 정의합니다.
    async fetchUser(@Request() req) {
        const user = await this.usersService.findOneById(req.user.userId); // 요청 객체에서 userId를 추출하여 사용자 정보를 가져옵니다.
        return { id: user.id, name: user.name, email: user.email, age: user.age }; // 사용자 정보를 반환합니다.
    }
    //getProfile Docs
    //Headers : Authorization
    //Value : Bearer (accessToken 넣어주어야 함)
}