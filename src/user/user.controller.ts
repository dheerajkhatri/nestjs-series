import {Body, Controller, Get, Post} from "@nestjs/common";
import UserService from "./user.service";
import CreateUserDto from "./dtos/createUser.dto";

@Controller('/users')
export default class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        return this.userService.createUser(user);
    }
}
