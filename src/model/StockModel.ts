import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { NextVal } from "typeorm-sequence";
import { AbstractModel } from "./AbstractModel";
import { Product } from "./Product";
import { Purchase } from "./Purchase";

@Entity('stock')
export class Stock extends AbstractModel {


    @NextVal("seq_purchase")
    @PrimaryColumn()
    id: number

    @Column({ name: "product_id" })
    productId: number

    @ManyToOne(type => Product)
    @JoinColumn({ name: 'product_id' })
    product: Product

    @Column()
    quantity: number

    @Column({ name: 'unit_price' })
    unitPrice: number

    @Column({ name: 'total_price' })
    totalPrice: number

    @Column()
    color: string

    @Column()
    brand: string

    @Column({ name: "purchase_id" })
    purchaseId: number

    @ManyToOne(type => Purchase)
    @JoinColumn({ name: 'purchase_id' })
    purchase: Purchase

  

}