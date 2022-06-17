import { Column, Entity, PrimaryColumn } from "typeorm";
import { NextVal } from "typeorm-sequence";
import { AbstractModel } from "./AbstractModel";

@Entity('systemuser')
export class SystemUser extends AbstractModel {

    @PrimaryColumn()
    @NextVal('seq_system_user')
    id: number
    @Column()
    name: string
    @Column()
    login: string
    @Column()
    email: string
    @Column()
    active: boolean
    @Column()
    password: string
    @Column({ name: 'phone_number' })
    phoneNumber: string
    @Column({ name: 'access_profile' })
    accessProfile: string
}