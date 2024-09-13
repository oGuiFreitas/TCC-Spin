import { Injectable, HttpException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/user.schema"
import { UserDto } from "./dto/user.Dto";
import { Produtc } from "src/schemas/product.schema";
import { LikedProduct } from "src/schemas/likedProdutc.schema";
import { LikeProdutcDto } from './dto/likeProdutcs.Dto'
import { isValidId } from "src/utils/validatorId";
import { hashPassword, verifyPassword } from "src/utils/password"
import { AuthDto } from "./dto/auth.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(LikedProduct.name) private likedProductModel: Model<LikedProduct>,
        @InjectModel(Produtc.name) private productModel: Model<Produtc>) {
    }

    async createUser(createUserDto : UserDto) {
        const findUserEmail = await this.userModel.findOne({ email: createUserDto.email })
        if (findUserEmail) throw new HttpException("email is already registered", 409)
        const hashedPassword = await hashPassword(createUserDto.password);

        const newUser = new this.userModel({
            createUserDto,
            hashPassword: hashedPassword
        });
        return newUser.save()
    };

    async getAllUsers() {
        return await this.userModel.find({})
    }

    async getUserById(id: string): Promise<User> {
        isValidId(id, 'UserId')
        const findUser = (await this.userModel.findById(id));
        if (!findUser) throw new HttpException('User not found', 404);
        return findUser
    }

    async updateUser(id: string, updateUserData: UserDto): Promise<User> {
        isValidId(id, 'userId')
        await this.userModel.replaceOne({ _id: id }, updateUserData)
        return await this.userModel.findById(id,)
    };

    async deleteUser(id: string) {
        isValidId(id, 'userId')
        const findUser = await this.userModel.findByIdAndDelete(id);
        if (!findUser) throw new HttpException('User not found', 404);
        return 'deletado'
    };

    async likeProduct({ userId, ...createLikeProduct }: LikeProdutcDto) {
        isValidId(userId, 'userId')
        isValidId(createLikeProduct.productId, 'productId')

        const findUser = await this.userModel.findById(userId)
        if (!findUser) throw new HttpException('User not found', 404);

        const findProduct = await this.productModel.findById(createLikeProduct.productId)
        if (!findProduct) throw new HttpException('Product not found', 404);

        const newLike = new this.likedProductModel(createLikeProduct)
        const savedLike = await newLike.save();
        await findUser.updateOne({
            $push: {
                myLikedProducts: savedLike._id,
            },
        })
        return savedLike
    };

    async deleteProductLikes(userId, likeId) {
        isValidId(userId, 'userId')
        isValidId(likeId, 'likeId')

        const findUser = await this.userModel.findById(userId)
        if (!findUser) throw new HttpException('User not found', 404);

        const findLike = await this.likedProductModel.findByIdAndDelete(likeId);
        if (!findLike) throw new HttpException('likeId not found', 404);

        await findUser.updateOne({
            $pull: {
                myLikedProducts: likeId,
            },
        })

        return 'hehe'
    }

    async auth(authDto: AuthDto) {
        const findUser = await this.userModel.findOne({ email: authDto.email }).exec();
        if (!findUser) throw new HttpException('Incorrect credentials', 401);

        const isMatch = await verifyPassword(authDto.password, findUser.hashPassword);

        if (!isMatch) throw new HttpException('Incorrect credentials', 401)

        return { message: 'Login successful' };
    };
}