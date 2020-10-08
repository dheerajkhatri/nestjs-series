import {Controller, Post, Req, UploadedFile, UseInterceptors} from "@nestjs/common";
import FileService from "./file.service";
import {Express} from "express";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('files')
export default class FileController {
    constructor(private readonly fileService: FileService) {
    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
        return this.fileService.uploadPublicFile(file.buffer, file.originalname);
    }
}
