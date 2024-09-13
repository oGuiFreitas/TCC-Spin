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
    UploadedFiles,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
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
        file: Express.Multer.File
    ) {
        return this.photosService.uploadSingleFile(file);
    }

    @Get(':key')
    async getFileUrl(@Param('key') key: string) {
        return this.photosService.getFileUrl(key);
    }

    @Post('/files')
    @UseInterceptors(FilesInterceptor('files', 4, {}))
    async uploadFiles(
        @UploadedFiles(new ParseFilePipe({
            validators: [
                new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }), 
                new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }) 
            ],
            fileIsRequired: true,
        }))
        files: Express.Multer.File[]
    ) {
        return this.photosService.uploadMultipleFiles(files);
    }
}