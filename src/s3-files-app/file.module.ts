import {Module} from "@nestjs/common";
import FileController from "./file.controller";
import FileService from "./file.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import File from "./file.entity";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [TypeOrmModule.forFeature([File]), ConfigModule],
    providers: [FileService],
    controllers: [FileController]
})
export default class FileModule {

}
