import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
export class LikedProduct {

    @Prop()
    userId: string;

    @Prop()
    productId: string;

    @Prop({type: Date, default: Date.now})
    createAt: string;

}

export const LikedProductSchema = SchemaFactory.createForClass(LikedProduct);