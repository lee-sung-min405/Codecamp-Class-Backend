import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [
    ConfigModule, // 환경 변수 및 설정을 로드하는 모듈입니다.
    PassportModule.register({ defaultStrategy: 'jwt' }), // Passport 모듈을 등록하고 기본 전략을 'jwt'로 설정합니다.
    JwtModule.registerAsync({
      imports: [ConfigModule], // ConfigModule을 가져와서 사용합니다.
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), // 환경 변수에서 JWT 비밀 키를 가져옵니다.
        signOptions: { expiresIn: '1h' }, // JWT의 유효 기간을 60초로 설정합니다.
      }),
      inject: [ConfigService], // ConfigService를 의존성 주입합니다.
    }),
    UsersModule, // UsersModule을 가져옵니다.
  ],
  controllers: [AuthResolver], // AuthController를 이 모듈의 컨트롤러로 등록합니다.
  providers: [AuthService, JwtStrategy], // AuthService와 JwtStrategy를 이 모듈의 프로바이더로 등록합니다.
})
export class AuthModule {}