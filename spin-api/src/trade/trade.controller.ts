import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TradeService } from './trade.service';
import { TradeDto } from './dto/trade.dto';
import { Trade } from 'src/schemas/trade.schema';
import { UpdateTradeDto } from './dto/updateTrade.dto';

@Controller('trade')
export class TradeContoller {
    constructor(private tradeService: TradeService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    createTrade(@Body() createTradeDto: TradeDto) {
        return this.tradeService.createTrade(createTradeDto);
    }

    @Get()
    async getAllTrades() {
        return await this.tradeService.getAllTrades();
    }

    @Get('id/:id')
    async getTradeById(@Param('id') id: string): Promise<Trade> {
       return await this.tradeService.getTradeById(id)
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateTrade(@Param('id') id: string, @Body() updateTradeDto: UpdateTradeDto): Promise<Trade> {
        return await this.tradeService.updateTrade(id,updateTradeDto);
    }
    
    // @Delete(':id')
    // deleteTrade(@Param('id') id: string) {
    //     return this.tradeService.deleteTrade(id)
    // }

}