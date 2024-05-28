import { Module } from "@nestjs/common";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([
            User,
        ])
    ],
    controllers: [UsersResolver], // 수정: 객체가 아닌 배열 요소로 포함
    providers: [UsersService],

    exports:[
        UsersService,
    ],
})
export class UsersModule{
    
}