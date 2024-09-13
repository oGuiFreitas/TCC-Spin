import { Type } from "class-transformer";
import { IsString, IsNotEmpty } from "class-validator";

export class UpdateTradeDto {

    @IsNotEmpty()
    @IsString()
    readonly status: string;
            
}
