import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column()
    email:string;

    //비밀번호는 브라우저에 전달하지 않음
    @Column()
    password:string;

    @Column()
    name:string;

    @Column()
    age:number;
    
}