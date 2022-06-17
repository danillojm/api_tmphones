import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { NextVal } from "typeorm-sequence";
import { AbstractModel } from "./AbstractModel";
import { PlatformPurchase } from "./PlatformPurchase";

import { Product } from "./Product";

@Entity("purchase")
export class Purchase extends AbstractModel {

    @NextVal("seq_purchase")
    @PrimaryColumn()
    id: number;

    @CreateDateColumn({ name: 'purchase_date' })
    purchaseDate: Date;

    @Column({ name: "platformpurchase_id" })
    platformpurchaseId: number;

    @ManyToOne(type => PlatformPurchase)
    @JoinColumn({ name: 'platformpurchase_id' })
    platformPurchase: PlatformPurchase;

    @Column({ name: "store_name" })
    storeName: string;

    @Column({ name: "order_id" })
    orderId: string;

    @Column({ name: "product_id" })
    productId: number;

    @ManyToOne(type => Product)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @Column()
    quantity: number;

    @Column({ name: "unit_price" })
    unitPrice: number;

    @Column({ name: "total_price" })
    totalPrice: number;

    @Column({ name: "tracking_code" })
    trackingCode: string;

    @Column()
    observation: string;

    @Column()
    status: string;

    @Column({ name: "product_arrived" })
    productArrived: boolean;
   
    @Column()
    color: string;
}