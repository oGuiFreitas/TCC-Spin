import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProdutcsService } from "./products.service";
import { ProdutcsContoller } from "./products.controller";
import { Produtc, ProdutcSchema } from "src/schemas/product.schema";
import { User, UserSchema } from "src/schemas/user.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Produtc.name,
                schema: ProdutcSchema,
            },
            {
                name: User.name,
                schema: UserSchema,
            },
        ])
    ],
    providers: [
        ProdutcsService
    ],
controllers: [
    ProdutcsContoller
]
})
export class ProdutcsModule {}