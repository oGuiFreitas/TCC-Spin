import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Trade } from "./trade.schema";
import { Photo } from "./photo.schema";

@Schema()
export class Produtc {

    @Prop()
    title: string;

    @Prop()
    subtitle: string[]

    @Prop()
    category: string[];
    
    @Prop({ type: [{ type: mongoose.Schema.ObjectId, ref: 'Photo' }] })
    urlPhotos?: Photo[];

    @Prop()
    userId: string;

    @Prop()
    thumbnail: string;

    @Prop()
    description: string;

    @Prop({type:[{type: mongoose.Schema.ObjectId, ref:'Trade'}]})
    tradeProposals?: Trade[]; 
    
}

export const ProdutcSchema = SchemaFactory.createForClass(Produtc);