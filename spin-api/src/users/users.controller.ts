import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { User } from 'src/schemas/user.schema';
import {LikeProdutcDto} from './dto/likeProdutcs.dto'
import { AuthDto } from './dto/auth.dto';

import {Query as ExpressQuery} from 'express-serve-static-core'

@Controller('users')
export class UsersContoller {

    constructor(private userService: UsersService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDto: UserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Get()
    async getAllUsers() {
        return await this.userService.getAllUsers();
    }

    @Get('id/:id')
    async getUserById(@Param('id') id: string): Promise<User> {
       return await this.userService.getUserById(id)
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateUser(@Param('id') id: string, @Body() updateUserDto: UserDto): Promise<User> {
        return await this.userService.updateUser(id,updateUserDto);
    }
    
    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        return await this.userService.deleteUser(id)
    }

    @Post('/liked')
    @UsePipes(new ValidationPipe())
    likeProduct(@Body() createlikedProductDto: LikeProdutcDto) {
        return this.userService.likeProduct(createlikedProductDto);
    }

    @Delete(':userId/:likeId')
    deleteProductLikes(@Param('userId') userId: string, @Param('likeId') likeId: string ) {
        return this.userService.deleteProductLikes(userId,likeId);
    }

    @Post('login/')
    @UsePipes(new ValidationPipe())
    auth(@Body() authDto: AuthDto){
        return this.userService.auth(authDto)
    };
}