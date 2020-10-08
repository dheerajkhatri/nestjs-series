import {Module} from "@nestjs/common";
import UserController from "./user.controller";
import UserService from "./user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import User from "./user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
    controllers: [UserController]
})
export default class UserModule {
}
