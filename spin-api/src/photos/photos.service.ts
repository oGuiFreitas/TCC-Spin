import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
    S3Client,
    PutObjectCommand,
    DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Photo } from 'src/schemas/photo.schema';

@Injectable()
export class PhotosService {
    private client: S3Client;
    private bucketName = this.configService.get('S3_BUCKET_NAME');

    constructor(
        @InjectModel(Photo.name) private photoModel: Model<Photo>,
        private configService: ConfigService,
    ) {

        const s3_region = this.configService.get('S3_REGION');

        this.client = new S3Client({
            region: s3_region,
            credentials: {
                accessKeyId: this.configService.get('S3_ACCESS_KEY'),
                secretAccessKey: this.configService.get('S3_SECRET_ACCESS_KEY'),
            },
            forcePathStyle: true,
        });
    }
    async getFileUrl(key: string) {
        return { url: `https://${this.bucketName}.s3.amazonaws.com/${key}` };
    }

    async uploadSingleFile(file: Express.Multer.File) {

        try {
            const key = `p/${uuidv4()}`;
            const command = new PutObjectCommand({
                Bucket: this.bucketName,
                Key: key,
                Body: file.buffer,
                ContentType: file.mimetype,
                ACL: 'public-read',

                Metadata: {
                    originalName: file.originalname,
                },
            });

            const uploadResult = await this.client.send(command);

            const fileUrl = (await this.getFileUrl(key)).url;
            const newPhoto = new this.photoModel({ url: fileUrl });
            const savedPhoto = await newPhoto.save();
            return savedPhoto;

        } catch (error) {
            throw new (error);
        }
    }

    async uploadMultipleFiles(files: Express.Multer.File[]) {
        try {
            const uploadedPhotos = [];

            for (const file of files) {
                const key = `p/${uuidv4()}`;
                const command = new PutObjectCommand({
                    Bucket: this.bucketName,
                    Key: key,
                    Body: file.buffer,
                    ContentType: file.mimetype,
                    ACL: 'public-read',
                    Metadata: {
                        originalName: file.originalname,
                    },
                });

                const uploadResult = await this.client.send(command);

                const fileUrl = (await this.getFileUrl(key)).url;
                const newPhoto = new this.photoModel({ url: fileUrl });
                const savedPhoto = await newPhoto.save();
                uploadedPhotos.push(savedPhoto._id);
            }

            return uploadedPhotos;

        } catch (error) {
            throw new Error(`Failed to upload files: ${error.message}`);
        }
    }
} 