import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import * as bcrypt from "bcrypt";
import { LoginUserDto, LoginUserDtoGetAccessToken } from "./interfaces/auth-loginUser.interface";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService : JwtService, // JwtService를 주입받습니다.
        private readonly usersService: UsersService, // UsersService를 주입받습니다.
        private readonly configService: ConfigService, // ConfigService를 주입받습니다.
    ){}

    //accessToken을 생성하고 반환하는 로직이 구현
    getAccessToken({user} : LoginUserDtoGetAccessToken):string{
        return this.jwtService.sign(
            {sub : user.id}, // JWT의 payload에 user.id를 포함합니다.
            {secret : this.configService.get<string>('JWT_SECRET'), expiresIn:'1h'} // 비밀 키와 유효 기간을 설정합니다.
        );
    }  

    async login({ email, password }: LoginUserDto): Promise<{ accessToken: string }> {
        // 1. 이메일로 사용자 찾기
        const user = await this.usersService.findOneByEmail({ email });
    
        // 2. 사용자가 없으면 예외 던지기
        if (!user) throw new UnprocessableEntityException("존재하지 않는 이메일입니다.");
        
        // 3. 비밀번호가 일치하지 않으면 예외 던지기
        const isAuth = await bcrypt.compare(password, user.password);
        if (!isAuth) throw new UnprocessableEntityException("암호가 틀렸습니다.");
    
        // 4. JWT 토큰 생성 및 반환
        const accessToken = this.getAccessToken({user});
        return { accessToken }; 
    }
}
