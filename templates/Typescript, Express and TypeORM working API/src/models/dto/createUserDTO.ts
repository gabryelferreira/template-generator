import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    username: string;
    
    @IsNotEmpty()
    password: string;

    constructor(createUserDto: CreateUserDTO) {
        this.name = createUserDto.name;
        this.username = createUserDto.username;
        this.password = createUserDto.password;
    }
}