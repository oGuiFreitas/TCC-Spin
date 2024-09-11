import {
    Body,
    Controller,
    FileTypeValidator,
    Get,
    MaxFileSizeValidator,
    Param,
    ParseFilePipe,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
    constructor(private readonly photosService: PhotosService) { }

    @Post('/file')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
        @UploadedFile
            (new ParseFilePipe({
                validators: [
                    new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
                ],
                fileIsRequired: true,
            }),
            )
        file: Express.Multer.File, @Body('productId') productId: string
    ) {
        return this.photosService.uploadSingleFile({file,productId});
    }

    @Get(':key')
    async getFileUrl(@Param('key') key: string) {
        return this.photosService.getFileUrl(key);
    }


}

