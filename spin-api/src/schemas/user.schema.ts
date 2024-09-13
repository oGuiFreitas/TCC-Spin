import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Produtc } from "src/schemas/product.schema";
import { LikedProduct } from "./likedProdutc.schema";
import { Trade } from './trade.schema'

@Schema()
export class User {

    @Prop()
    name: string;

    @Prop()
    surname: string;

    @Prop()
    email: string;

    @Prop()
    hashPassword: string;

    @Prop()
    phone: string;

    @Prop({ type: [{ type: mongoose.Schema.ObjectId, ref: 'Produtc' }] })
    myProducts?: Produtc[];

    @Prop({ type: [{ type: mongoose.Schema.ObjectId, ref: 'LikedProduct' }] })
    myLikedProducts?: LikedProduct[];

    @Prop({ type: [{ type: mongoose.Schema.ObjectId, ref: 'Trade' }] })
    myTradeProposals?: Trade[];

    @Prop({ type: [{ type: mongoose.Schema.ObjectId, ref: 'Trade' }] })
    tradeReceived?: Trade[];

}

export const UserSchema = SchemaFactory.createForClass(User);