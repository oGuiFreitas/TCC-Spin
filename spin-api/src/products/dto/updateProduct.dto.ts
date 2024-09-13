import { IsString, IsArray, IsOptional } from "class-validator";

export class UpdateProductDto {

    @IsOptional()
    @IsString()
    readonly title: string;
       
    @IsOptional()
    @IsArray()
    readonly subtitle: string[];
      
    @IsOptional()
    @IsArray()
    readonly category: string[];

    @IsOptional()
    @IsArray()
    readonly url_photos: string[];

    @IsOptional()
    @IsString()
    readonly user_id: string;
       
    @IsOptional()
    @IsString()
    readonly thumbnail: string;
       
    @IsOptional()
    @IsString()
    readonly description: string;
        
}