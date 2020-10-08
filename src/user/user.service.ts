import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import User from "./user.entity";
import {Repository} from "typeorm";
import CreateUserDto from "./dtos/createUser.dto";

@Injectable()
export default class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {
    }

    getAllUsers() {
        return this.userRepository.find();
    }

    async createUser(user: CreateUserDto) {
        const newUser = this.userRepository.create(user);
        await this.userRepository.save(newUser);
        return newUser;
    }
}
