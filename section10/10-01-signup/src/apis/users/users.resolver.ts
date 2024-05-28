import { Body, Controller, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user-input";

@Controller('/products')
export class UsersResolver{

    constructor(
        private readonly usersService : UsersService
    ){}

    @Post('/createUser')
    createUser(
        @Body() createUserDto: CreateUserDto
    ): Promise<User>{
        return this.usersService.create(createUserDto)
    }
}