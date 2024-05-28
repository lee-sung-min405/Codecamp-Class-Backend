import { Module } from "@nestjs/common";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports:[
        JwtModule.register({}),
        UsersModule
    ],
    controllers: [AuthResolver], // 수정: 객체가 아닌 배열 요소로 포함
    providers: [AuthService]
})
export class AuthModule{

}