import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProdutcsService } from './products.service';
import { ProductDTO } from './dto/product.dto';
import { Produtc } from 'src/schemas/product.schema';

import {Query as ExpressQuery} from 'express-serve-static-core'

@Controller('products')
export class ProdutcsContoller {

    constructor(private productsService: ProdutcsService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    createProduct(@Body() createProductDTO: ProductDTO) {
        return this.productsService.createProduct(createProductDTO);
    }

    @Get()
    async getAllProducts(@Query() query: ExpressQuery) {
        return await this.productsService.getAllProducts(query);
    }

    @Get('id/:id')
    async getProductById(@Param('id') id: string): Promise<Produtc> {
       return await this.productsService.getProductById(id)
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateProduct(@Param('id') id: string, @Body() updateProductDTO: ProductDTO): Promise<Produtc> {
        return await this.productsService.updateProduct(id,updateProductDTO);
    }
    
    @Delete(':id')
    async deleteProduct(@Param('id') id: string) {
        return await this.productsService.deleteProduct(id)
    }
}