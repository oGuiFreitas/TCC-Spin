import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProdutcsService } from './products.service';
import { Produtc } from 'src/schemas/product.schema';
import { ProductDto } from './dto/product.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';

@Controller('products')
export class ProdutcsContoller {

    constructor(private productsService: ProdutcsService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    createProduct(@Body() createProductDto: ProductDto) {
        return this.productsService.createProduct(createProductDto);
    }

    @Get()
    async getAllProducts() {
        return await this.productsService.getAllProducts();
    }

    @Get('id/:id')
    async getProductById(@Param('id') id: string): Promise<Produtc> {
       return await this.productsService.getProductById(id)
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<Produtc> {
        return await this.productsService.updateProduct(id,updateProductDto);
    }
    
    @Delete(':id')
    deleteProduct(@Param('id') id: string) {
        return this.productsService.deleteProduct(id)
    }

}