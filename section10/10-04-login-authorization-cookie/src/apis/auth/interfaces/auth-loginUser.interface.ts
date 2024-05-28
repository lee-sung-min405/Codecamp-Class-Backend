import { User } from "src/apis/users/entities/user.entity";

export interface LoginUserDto {
    email: string;
    password: string;
}



export interface LoginUserDtoGetAccessToken{
    user :User;
}