import { Injectable, HttpException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UpdateTradeDto } from "./dto/updateTrade.dto";
import { Produtc } from "src/schemas/product.schema";
import { User } from "src/schemas/user.schema";
import { Trade } from "src/schemas/trade.schema";
import { TradeDto } from "./dto/trade.dto";
import { isValidId } from "src/utils/validatorId";

@Injectable()
export class TradeService {

    constructor(
        @InjectModel(Trade.name) private tradeModel: Model<Trade>,
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(Produtc.name) private productModel: Model<Produtc>) {
    }

    async createTrade(createTradeDto: TradeDto) {
        isValidId(createTradeDto.proposerId, 'proposerId')
        isValidId(createTradeDto.offered_item_id, 'offered_item_id')
        isValidId(createTradeDto.requested_item_id, 'requested_item_id')
        isValidId(createTradeDto.receiverId, 'receiverId')

        const findProposerUser = await this.userModel.findById(createTradeDto.proposerId)
        if (!findProposerUser) throw new HttpException('User proposer not found', 404);

        const findReceiverUser = await this.userModel.findById(createTradeDto.receiverId)
        if (!findReceiverUser) throw new HttpException('User receiver not found', 404);

        const findRequestedItem = await this.productModel.findById(createTradeDto.requested_item_id)
        if (!findRequestedItem) throw new HttpException('Product request not found', 404);

        const findOfferedItem = await this.productModel.findById(createTradeDto.offered_item_id)
        if (!findOfferedItem) throw new HttpException('Product offered not found', 404);

        const newTrade = new this.tradeModel(createTradeDto);
        const savedTrade = await newTrade.save();

        await findProposerUser.updateOne({
            $push: {
                myTradeProposals: savedTrade._id,
            },
        });
        await findRequestedItem.updateOne({
            $push: {
                tradeProposals: savedTrade._id,
            },
        });
        await findReceiverUser.updateOne({
            $push: {
                tradeReceived: savedTrade._id,
            },
        });

        return savedTrade;
    }
    async getAllTrades() {
        return await this.tradeModel.find();
    }

    async getTradeById(id: string): Promise<Trade> {
        isValidId(id, 'tradeId')
        const findTrade = await this.tradeModel.findById(id).populate(['offered_item_id', 'requested_item_id']);
        if (!findTrade) throw new HttpException('Product not found', 404);
        return findTrade
    }

    async updateTrade(id: string, updateProductData: UpdateTradeDto): Promise<Trade> {
        isValidId(id, 'tradeId')
        const updateTrade = await this.tradeModel.findByIdAndUpdate({ _id: id }, updateProductData)
        if (!updateTrade) throw new HttpException('Trade not found', 404);
        const updateTrade2 = await this.tradeModel.findById(id)
        return updateTrade2;
    }
}