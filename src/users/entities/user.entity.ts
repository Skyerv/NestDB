/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/* eslint-disable prettier/prettier */
@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    emal: string;

    @Column()
    phone: string;
    
    @Column()
    password: string;
}