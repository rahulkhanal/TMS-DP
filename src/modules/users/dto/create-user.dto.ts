import { IsDate, IsEmail, IsISO8601, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string

    @IsUUID()
    department: string

    @IsOptional()
    @IsNumber()
    salary: number

    @IsString()
    role: string

    @IsISO8601()
    joinedDate: Date

    @IsEmail()
    email: string

    @IsString()
    password: string

    @IsString()
    rToken: string
}
