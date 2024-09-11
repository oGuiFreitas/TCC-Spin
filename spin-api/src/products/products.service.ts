import { Injectable, HttpException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import mongoose from 'mongoose';
import { ProductDto } from "./dto/product.dto";
import { UpdateProductDto } from "./dto/updateProduct.dto";
import { Produtc } from "src/schemas/product.schema";
import { User } from "src/schemas/user.schema";
import { isValidId } from "src/utils/validatorId";

@Injectable()
export class ProdutcsService {

    constructor(
        @InjectModel(Produtc.name) private productModel: Model<Produtc>,
        @InjectModel(User.name) private userModel: Model<User>) {
    }

    async createProduct(createProductDto : ProductDto) {
        isValidId(createProductDto.userId, 'userId')
        const findUser = await this.userModel.findById(createProductDto.userId)
        if (!findUser) throw new HttpException('User not found', 404);

        const newProduct = new this.productModel(createProductDto)
        const savedProduct = await newProduct.save();
        await findUser.updateOne({
            $push: {
                myProducts: savedProduct._id,
            },
        })
        return savedProduct
    }

    async getAllProducts() {
        return await this.productModel.find()
    }

    async getProductById(id: string): Promise<Produtc> {
        isValidId(id,'productId')
        const findProduct = await this.productModel.findById(id);
        if (!findProduct) throw new HttpException('Product not found', 404);
        return findProduct
    }

    async updateProduct(id: string, updateProductData: UpdateProductDto): Promise<Produtc> {
        isValidId(id,'productId')
        const updateProduct = await this.productModel.findByIdAndUpdate({ _id: id }, updateProductData)
        if (!updateProduct) throw new HttpException('Product not found', 404);
        return updateProduct
    }

    async deleteProduct(id: string) {
        isValidId(id,'productId')
        const findProduct = await this.productModel.findByIdAndDelete(id);
        if (!findProduct) throw new HttpException('Product not found', 404);
        return 'deletado';
    }
}

// async createProduct({ subtitle, ...createProductDto }:ProductDto) {
//     if(subtitle){
//         const newSubtitle = new this.subtitleModel(subtitle);
//         const savedNewSubtitle = await newSubtitle.save();
//         const newProduct = new this.productModel({
//             ...createProductDto,
//             subtitle: savedNewSubtitle.id,
//         });
//         return newProduct.save()
//     }
//     const newProduct = new this.productModel(createProductDto)
//     return newProduct.save()
// }