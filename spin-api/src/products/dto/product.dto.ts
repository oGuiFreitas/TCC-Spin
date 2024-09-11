import { Type } from "class-transformer";
import { IsString, IsNotEmpty, IsArray, IsOptional, ValidateNested } from "class-validator";
import { TradeDto } from "src/trade/dto/trade.dto";

export class ProductDto {

    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsArray()
    readonly subtitle: string[];

    @IsNotEmpty()
    @IsArray()
    readonly category: string[];

    @IsNotEmpty()
    @IsString()
    readonly userId: string;

    @IsNotEmpty()
    @IsString()
    readonly thumbnail: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => TradeDto)
    readonly tradeProposals: string

    @IsOptional()
    @ValidateNested()
    readonly urlPhotos: string[]

}