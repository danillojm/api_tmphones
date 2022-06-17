import { Column, Entity, PrimaryColumn } from "typeorm";
import { NextVal } from "typeorm-sequence";
import { AbstractModel } from "./AbstractModel";

@Entity("address")
export class Address extends AbstractModel {


    @NextVal("seq_address")
    @PrimaryColumn()
    id: number;

    @Column({ name: "zip_code" })
    zipCode: string;

    @Column()
    name: string;

    @Column()
    uf: string;

    @Column()
    city: string;

}