import { Column, Entity, PrimaryColumn } from "typeorm"
import { NextVal } from "typeorm-sequence"
import { AbstractModel } from "./AbstractModel"
@Entity("platformpurchase")
export class PlatformPurchase extends AbstractModel {


    @NextVal("seq_platform_purchase")
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    url: string;

    @Column({ name: "logo_img" })
    logoImg: string;

    @Column({ name: "total_value" })
    totalValue: number


}