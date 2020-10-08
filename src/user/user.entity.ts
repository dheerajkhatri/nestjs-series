import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import { Exclude } from 'class-transformer';
import Address from '../address/address.entity';
import Post from "../post/post.entity";

@Entity()
class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ unique: true })
    public email: string;

    @Column()
    public name: string;

    @Column()
    @Exclude()
    public password: string;

    //Only one side of the relationship can be eager
    //Cascade: true -> we can save an address while saving a user.
    @OneToOne(() => Address, {eager: true, cascade: true})
    //@JoinColumn(), indicates that the  User entity owns the relationship
    @JoinColumn()
    public address: Address;

    @OneToMany(() => Post, (post: Post) => post.author)
    public posts: Post[];
}

export default User;
