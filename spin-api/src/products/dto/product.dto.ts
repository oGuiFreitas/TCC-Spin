import { Type } from "class-transformer";
import { IsString, IsNotEmpty, MinLength, MaxLength, ArrayMinSize } from "class-validator";

export class ProductDTO {

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    private readonly title: string;
       
}


// ///
//     @IsNotEmpty()
//     @IsString()
//     @MinLength(2)
//     @MaxLength(50)
//     private readonly brand: string;
        
//     @IsNotEmpty()
//     @ArrayMinSize(2)
//     @MaxLength(20, {
//         each: true,
//       })
//     private readonly category: string[];
    
//     @IsNotEmpty()
//     @IsString()
//     @MinLength(2)
//     @MaxLength(50)
//     private readonly description: string;

//     //isso aqui era para ser um objeto mas ficou para depois
//     @IsNotEmpty()
//     @IsString()
//     @MinLength(2)
//     @MaxLength(50)
//     private readonly advertiser: string[];
 