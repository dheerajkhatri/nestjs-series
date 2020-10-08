import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import User from "../user/user.entity";
import {Transform} from "class-transformer";

@Entity()
class Address {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    @Transform(value => {
        if (value !== null) {
            return value;
        }
    })
    public street: string;

    @Column()
    public city: string;

    @Column()
    public country: string;

    @OneToOne(() => User, (user: User) => user.address)
    public author: User;
}

export default Address;
