import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ConfigService} from "@nestjs/config";
import {S3} from "aws-sdk";
import {v4 as uuid} from 'uuid';
import File from "./file.entity";


@Injectable()
export default class FileService {
    constructor(@InjectRepository(File) private fileRepository: Repository<File>, private configService: ConfigService) {
    }

    async uploadPublicFile(dataBuffer: Buffer, filename: string) {
        const s3 = new S3();
        const uploadResult = await s3.upload({
            Bucket: this.configService.get('AWS_BUCKET_NAME'),
            Body: dataBuffer,
            Key: `${uuid()}-${filename}`
        }).promise();

        const newFile = this.fileRepository.create({
            key: "url",
            url: uploadResult.Location
        });
        await this.fileRepository.save(newFile);
        return newFile;
    }
}
