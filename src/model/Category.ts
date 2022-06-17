import { Column, Entity, PrimaryColumn } from "typeorm";
import { NextVal } from "typeorm-sequence";
import { AbstractModel } from "./AbstractModel";
@Entity("category")
export class Category extends AbstractModel {

    @NextVal("seq_category")
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    description: string;

}