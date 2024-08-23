import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Produtc {

    @Prop()
    title: string;

}

export const ProdutcSchema = SchemaFactory.createForClass(Produtc);