import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";
import {NextVal } from "typeorm-sequence";
import { AbstractModel } from "./AbstractModel";


@Entity("client")
export class Client extends  AbstractModel   {


    @NextVal("seq_client")
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column({name:"phone_number"})
    phoneNumber: string;

    @Column()
    email: string;

    @Column()
    cpf: string;

    @Column()
    observation: string;
    //  address: Address
}