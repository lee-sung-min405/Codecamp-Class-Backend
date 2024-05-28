import { Controller, Post, Body, Res, Req, HttpException, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./interfaces/auth-loginUser.interface";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { Response, Request } from 'express';
import { UsersService } from "../users/users.service"; // UsersService를 가져옵니다.

@Controller('/auth')
export class AuthResolver {
    constructor(
        private readonly authService: AuthService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private readonly usersService: UsersService, // UsersService를 주입받습니다.
    ) {}

    @Post('/login')
    async login(
        @Body() loginUserDto: LoginUserDto,
        @Res({ passthrough: true }) response: Response
    ): Promise<{ accessToken: string }> {
        const { accessToken, refreshToken } = await this.authService.login(loginUserDto);
        response.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true, // 프로덕션에서는 true로 설정해야 합니다.
            sameSite: 'strict',
        });
        return { accessToken };
    }

    @Post('/refresh')
    async refresh(
        @Req() request: Request,
        @Res({ passthrough: true }) response: Response
    ) {
        const refreshToken = request.cookies['refreshToken'];
        if (!refreshToken) {
            throw new HttpException('Refresh token not found', HttpStatus.UNAUTHORIZED);
        }
        try {
            const payload = this.jwtService.verify(refreshToken, { secret: this.configService.get<string>('JWT_REFRESH_SECRET') });
            const user = await this.usersService.findOneById(payload.sub); // 전체 User 객체를 가져옵니다.
            const accessToken = this.authService.getAccessToken({ user });
            return { accessToken };
        } catch (e) {
            throw new HttpException('Invalid refresh token', HttpStatus.UNAUTHORIZED);
        }
    }
}
