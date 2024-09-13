import { IsString, IsNotEmpty } from "class-validator";

export class AuthDto {

    @IsNotEmpty()
    @IsString()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;

}