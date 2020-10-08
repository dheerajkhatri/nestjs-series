import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import Address from "./address.entity";
import {Repository} from "typeorm";
import CreateAddressDto from "./dtos/createAddress.dto";

@Injectable()
export default class AddressService {
    constructor(@InjectRepository(Address) private addressRepository: Repository<Address>) {
    }

    getAllAddress() {
        return this.addressRepository.find();
    }

    async createAddress(address: CreateAddressDto) {
        const newAddress = this.addressRepository.create(address);
        await this.addressRepository.save(newAddress);
        return newAddress;
    }
}
