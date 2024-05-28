import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import * as bcrypt from "bcrypt";
import { LoginUserDto, LoginUserDtoGetAccessToken } from "./interfaces/auth-loginUser.interface";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService : JwtService,
        private readonly usersService: UsersService
    ){}

    getAccessToken({user} : LoginUserDtoGetAccessToken):string{
        return this.jwtService.sign(
            {sub : user.id},
            {secret : "나의 비밀번호", expiresIn:'1h'}
        );
    }

    async login({ email, password }: LoginUserDto): Promise<{ accessToken: string }> {
        //1. 이메일이 일치하는 유저를 DB에서 찾기
        const user = await this.usersService.findOneByEmail({ email });
    
        //2. 일치하는 유저가 없으면?! 에러 던지기!!!
        if (!user) throw new UnprocessableEntityException("존재하지 않는 이메일입니다.");
        
        //3. 일치하는 유저가 있지만, 비밀번호가 틀렸다면?!
        const isAuth = await bcrypt.compare(password, user.password);
        if (!isAuth) throw new UnprocessableEntityException("암호가 틀렸습니다.");
    
        //4. 일치하는 유저도 있고, 비밀번호가 맞았다면 JWT 생성 및 반환
        // => accessToken(=JWT)을 만들어서 브라우저에 전달하기
        const accessToken = this.getAccessToken({user})
    
        return { accessToken }; // 수정된 부분   
    }

}

