import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TradeService } from "./trade.service";
import { TradeContoller } from "./trade.controller";
import { Trade, TradeSchema } from "src/schemas/trade.schema";
import { User, UserSchema } from "src/schemas/user.schema";
import { Produtc, ProdutcSchema } from "src/schemas/product.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Trade.name,
                schema: TradeSchema,
            },
            {
                name: User.name,
                schema: UserSchema,
            },
            {
                name: Produtc.name,
                schema: ProdutcSchema,
            },
        ])
    ],
    providers: [
        TradeService
    ],
controllers: [
    TradeContoller
]
})
export class TradeModule {}