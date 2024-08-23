import { Injectable, HttpException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Produtc } from "src/schemas/product.schema";
import { ProductDTO } from "./dto/product.dto";
import { Query } from 'express-serve-static-core'
import mongoose from 'mongoose';

const versionStatus = { __v: false }

const isValid = (id: string) => {
    let isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Product not found', 404);
}

@Injectable()
export class ProdutcsService {

    constructor(
        @InjectModel(Produtc.name) private productModel: Model<Produtc>) {
    }

    createProduct(createProductDTO: ProductDTO) {
        const newProduct = new this.productModel(createProductDTO)
        return newProduct.save()
    }

    async getAllProducts(query: Query) {
        const s = query.s ? {
            title: {
                $regex: query.s,
                $options: 'i',
            }
        }: {};

        return await this.productModel.find({...s}, versionStatus)
    }

    async getProductById(id: string): Promise<Produtc> {
        isValid(id)
        const findProduct = await this.productModel.findById(id, versionStatus);
        if (!findProduct) throw new HttpException('Product not found', 404);
        return findProduct
    }

    async updateProduct(id: string, updateProductData: ProductDTO): Promise<Produtc> {
        isValid(id)
        await this.productModel.replaceOne({ _id: id }, updateProductData)
        return await this.productModel.findById(id,)
    }
    async deleteProduct(id: string): Promise<Produtc> {
        isValid(id)
        const findProduct = await this.productModel.findByIdAndDelete(id, versionStatus);
        if (!findProduct) throw new HttpException('Product not found', 404);
        return findProduct
    }


}