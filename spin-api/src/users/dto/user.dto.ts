import { Type } from "class-transformer";
import { IsString, IsNotEmpty, IsOptional, ValidateNested } from "class-validator";
import { ProductDto } from "src/products/dto/product.dto";
import { LikeProdutcDto } from "./likeProdutcs.dto";
import { Trade } from "src/schemas/trade.schema";

export class UserDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly surname: string;

    @IsNotEmpty()
    @IsString()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;

    @IsNotEmpty()
    @IsString()
    readonly phone: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => ProductDto)
    readonly myProducts: string[]


    @IsOptional()
    @ValidateNested()
    @Type(() => LikeProdutcDto)
    readonly likedProducts: string[]

    @IsOptional()
    @ValidateNested()
    @Type(() => Trade)
    readonly myTradeProposals: string[]

    @IsOptional()
    @ValidateNested()
    @Type(() => Trade)
    readonly tradeReceived: string[]

}
