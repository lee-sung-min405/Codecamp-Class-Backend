// import { Controller, Get, Post, UseGuards, Request, Body } from "@nestjs/common";
// import { AuthGuard } from '@nestjs/passport';
// import { UsersService } from "../users/users.service";
// import { AuthService } from "./auth.service";
// import { LoginUserDto } from "./interfaces/auth-loginUser.interface";

// @Controller('/auth')
// export class AuthController {
//     constructor(
//         private readonly usersService: UsersService, // UsersService를 주입받습니다.
//         private readonly authService: AuthService // AuthService를 주입받습니다.
//     ) {}

//     @Post('/login') // POST /users/login 엔드포인트를 정의합니다.
//     login(
//         @Body() loginUserDto: LoginUserDto // 요청 본문에서 LoginUserDto를 받아옵니다.
//     ): Promise<{ accessToken: string }> {
//         return this.authService.login(loginUserDto); // AuthService의 login 메서드를 호출하여 JWT 토큰을 반환합니다.
//     }

//     @UseGuards(AuthGuard('jwt')) // 'jwt' 전략을 사용하는 인증 가드를 적용합니다.
//     @Get('/profile') // GET /users/profile 엔드포인트를 정의합니다.
//     async getProfile(@Request() req) {
//         const user = await this.usersService.findOneById(req.user.userId); // 요청 객체에서 userId를 추출하여 사용자 정보를 가져옵니다.
//         return { id: user.id, name: user.name, email: user.email, age: user.age }; // 사용자 정보를 반환합니다.
//     }
// }