import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutcsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { TradeModule } from './trade/trade.module';
import { PhotosModule } from './photos/photos.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
  }),
    MongooseModule.forRoot('mongodb://localhost/spin'),
    
    ProdutcsModule,
    UsersModule,
    TradeModule,
    PhotosModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
