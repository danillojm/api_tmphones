import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { Category } from "./Category";
import { v4 as uuid } from "uuid"
import { AbstractModel } from "./AbstractModel";
import { NextVal } from "typeorm-sequence";
@Entity("product")
export class Product extends AbstractModel {


    @NextVal("seq_product")
    @PrimaryColumn()
    id: string;

    @Column()
    code: string;

    @Column()
    description: string;

    @Column()
    category_id: string

    @ManyToOne(type => Category)
    @JoinColumn({ name: 'category_id' })
    category: Category;

    @Column()
    brand: string;

    @Column({ name: "sale_price" })
    salePrice: number;
    
    @Column()
    observation: string;
    
   

    constructor() {
        super()
    }
}