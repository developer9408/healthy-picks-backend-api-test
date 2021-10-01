import { CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export class BaseEntity{
    @PrimaryGeneratedColumn()
    id?: Number;
    @CreateDateColumn({nullable:true})
    createdAt?: Date;
    @CreateDateColumn({nullable:true})
    updatedAt?: Date
}