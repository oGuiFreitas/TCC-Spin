import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutcsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/spin'),
    ProdutcsModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
