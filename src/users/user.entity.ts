import { BaseEntity } from "../base-entity";
import { Column, Entity } from "typeorm";


@Entity('user')
export class User extends BaseEntity{
    @Column({type: 'varchar', length:100, nullable: false})
    name: string;
    @Column({type: 'varchar', length:100, nullable: true})
    description: string;

}