import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class users{
    @Prop({unique:true})
    email : String;

    @Prop()
    password : String
}

export type usersModel = users & Document

export const usersSchema = SchemaFactory.createForClass(users)