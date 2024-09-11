import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersContoller } from './users.controller'
import { UsersService } from "./users.service";
import { User, UserSchema } from 'src/schemas/user.schema';
import { LikedProduct, LikedProductSchema } from "src/schemas/likedProdutc.schema";
import { Produtc, ProdutcSchema } from "src/schemas/product.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserSchema,
            },
            {
                name: LikedProduct.name,
                schema: LikedProductSchema,
            },
            {
                name: Produtc.name,
                schema: ProdutcSchema,
            },
        ])
    ],
    providers: [
        UsersService
    ],
controllers: [
    UsersContoller
]
})
export class UsersModule {}