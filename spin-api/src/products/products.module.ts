import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Produtc, ProdutcSchema } from "src/schemas/product.schema";
import { ProdutcsService } from "./products.service";
import { ProdutcsContoller } from "./products.controller";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Produtc.name,
                schema: ProdutcSchema,
            }
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