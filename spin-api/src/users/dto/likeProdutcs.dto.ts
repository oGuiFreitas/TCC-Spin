import { IsString, IsNotEmpty } from "class-validator";

export class LikeProdutcDto {

    @IsNotEmpty()
    @IsString()
    readonly productId: string;

    @IsNotEmpty()
    @IsString()
    readonly userId: string;

}