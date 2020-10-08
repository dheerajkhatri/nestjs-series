import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class File {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public key: string;

    @Column()
    public url: string;
}
