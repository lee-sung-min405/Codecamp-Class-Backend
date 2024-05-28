import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

// JwtStrategy 클래스에서 만료된 토큰에 대한 처리 방식은 기본적으로 passport-jwt 모듈이 처리합니다. 
// 만약 토큰이 만료되었다면, passport-jwt는 자동으로 401 Unauthorized 에러를 발생시킵니다.

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub };
  }
}
