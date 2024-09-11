import { HttpException } from "@nestjs/common";
import mongoose from "mongoose";

export const isValidId = (id: string, field: string) =>{
    let isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException(`${field} not valid`, 400)
    return isValid;
}