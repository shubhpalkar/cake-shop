import { IsEmail, IsNotEmpty, isPhoneNumber, IsPhoneNumber } from "class-validator";
import { timeStamp } from "console";
import { Producttbl } from "src/product/product.entity";
import { Address } from "src/Shared/address.dto";
import { Payment } from "src/Shared/payment.dto";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ordertbl extends BaseEntity {
    @PrimaryGeneratedColumn()
    orderid: number

    @Column()
    userid: string

    @Column()
    @IsNotEmpty()
    addrdetails: string

    // @Column()
    // @IsNotEmpty()
    // payment: Payment

    @Column({ type: 'timestamp' , default: () => "CURRENT_TIMESTAMP"})
    ddate: Date 

    // @OneToMany (() => Producttbl, Producttbl => Producttbl.orders, {onUpdate: 'CASCADE', onDelete: 'CASCADE'} )
    // orders: Ordertbl[];

    @ManyToMany(type => Producttbl, { cascade: true })
    @JoinTable({
        name: 'product_order',
        joinColumn: { name: 'orderid', referencedColumnName: 'orderid'},
        inverseJoinColumn: { name: 'productid', referencedColumnName: 'productid'},
    })
    products: Producttbl[];
}

export default Ordertbl;


