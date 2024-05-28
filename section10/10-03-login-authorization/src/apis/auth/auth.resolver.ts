import { Controller, Get, Post, UseGuards, Request, Body } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from "../users/users.service";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./interfaces/auth-loginUser.interface";

@Controller('/auth')
export class AuthResolver {
    constructor(
        private readonly usersService: UsersService, // UsersService를 주입받습니다.
        private readonly authService: AuthService // AuthService를 주입받습니다.
    ) {}

    @Post('/login') // POST /users/login 엔드포인트를 정의합니다.
    login(
        @Body() loginUserDto: LoginUserDto // 요청 본문에서 LoginUserDto를 받아옵니다.
    ): Promise<{ accessToken: string }> {
        return this.authService.login(loginUserDto); // AuthService의 login 메서드를 호출하여 JWT 토큰을 반환합니다.
    }


}