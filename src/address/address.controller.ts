import {Body, Controller, Get, Post} from "@nestjs/common";
import AddressService from "./address.service";
import CreateAddressDto from "./dtos/createAddress.dto";

@Controller('/address')
export default class AddressController {
    constructor(private readonly addressService: AddressService) {
    }

    @Get()
    getAllAddress() {
        return this.addressService.getAllAddress();
    }

    @Post()
    async createAddress(@Body() address: CreateAddressDto) {
        return this.addressService.createAddress(address);
    }
}
