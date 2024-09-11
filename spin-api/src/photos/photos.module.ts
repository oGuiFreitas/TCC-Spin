import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Produtc, ProdutcSchema } from 'src/schemas/product.schema';
import { Photo, PhotoSchema } from 'src/schemas/photo.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Photo.name,
                schema: PhotoSchema,
            },
            {
                name:  Produtc.name,
                schema: ProdutcSchema,
            },
        ])
        
    ],
    providers: [
        PhotosService
    ],
controllers: [
    PhotosController
]
})
export class PhotosModule {}