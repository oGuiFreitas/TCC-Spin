import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "./user.schema";
import { Produtc } from "./product.schema";

@Schema()
export class Trade {

    @Prop({type: mongoose.Schema.ObjectId, ref: 'User'  })
    proposerId: User[];

    @Prop({ type: mongoose.Schema.ObjectId, ref: 'User' })
    receiverId: User[];

    @Prop({ type: mongoose.Schema.ObjectId, ref: 'Produtc' })
    offered_item_id: Produtc[];

    @Prop({ type: mongoose.Schema.ObjectId, ref: 'Produtc' })
    requested_item_id: Produtc[];

    @Prop({ type: Date, default: Date.now })
    proposalDate: string;

    @Prop()
    status: string;

}

export const TradeSchema = SchemaFactory.createForClass(Trade);