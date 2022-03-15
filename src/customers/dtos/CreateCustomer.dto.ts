import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateCustomerDto {
    @IsNotEmpty()
    @MinLength(3)
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}