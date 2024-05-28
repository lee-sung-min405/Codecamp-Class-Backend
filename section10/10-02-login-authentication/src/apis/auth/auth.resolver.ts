import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./interfaces/auth-loginUser.interface";

@Controller("/users")
export class AuthResolver {
    constructor(
        private readonly authService: AuthService
    ){}

    @Post('/login')
    login(
        @Body() loginUserDto: LoginUserDto
    ): Promise<{ accessToken: string }> {
        return this.authService.login(loginUserDto);
    }
    //login Docs
    //   {
    //     "email": "test@naver.com",
    //     "password": "testtest"
    //   }
  
  
}
