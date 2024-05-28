import { ConflictException, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { IUsersServiceCreate, IUsersServiceFindOneByEmail } from "./interfaces/users-service.interface";
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService{

    constructor(
        @InjectRepository(User)
        private readonly usersRepository:Repository<User>
    ){}

    findOneByEmail({email}: IUsersServiceFindOneByEmail):Promise<User>{
        return this.usersRepository.findOne({where : {email}})
    }

    async create({email, password, name, age }:IUsersServiceCreate): Promise<User>
    {
        //1. 가입된 이메일인지 검증하는 로직
        const user = await this.findOneByEmail({email})
        if(user) throw new ConflictException("이미 등록된 이메일 입니다.")

        //2. 비밀번호 암호화 하는 로직 (bcrypt 사용)
        const hashedPassword = await bcrypt.hash(password, 10)

        return this.usersRepository.save({
            email,
            password : hashedPassword,
            name,
            age,
        });
    }
}