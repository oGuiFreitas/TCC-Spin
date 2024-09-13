import { IsString, IsNotEmpty } from "class-validator";

export class TradeDto {

    @IsNotEmpty()
    @IsString()
    readonly proposerId: string;
    
    @IsNotEmpty()
    @IsString()
    readonly receiverId: string;
    
    @IsNotEmpty()
    @IsString()
    readonly offered_item_id: string;
    
    @IsNotEmpty()
    @IsString()
    readonly requested_item_id: string;
    
    @IsNotEmpty()
    @IsString()
    readonly status: string;
    
}