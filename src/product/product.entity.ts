import Ordertbl from "src/order/order.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producttbl {

    @PrimaryGeneratedColumn()
    productid: number

    @Column()
    productName: string

    @Column()
    price: number

    


    @ManyToMany(type => Ordertbl, { cascade: true })
    @JoinTable({
        name: 'product_order',
        joinColumn: { name: 'productid', referencedColumnName: 'productid'},
        inverseJoinColumn: { name: 'orderid', referencedColumnName: 'orderid'},
    })
    orders: Ordertbl[];
}

