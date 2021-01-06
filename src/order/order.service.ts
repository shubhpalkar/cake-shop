import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { exception } from 'console';
import { Repository } from 'typeorm';
import Ordertbl from './order.entity';
// import { Ordertbl } from '../Shared/order.dto'

@Injectable()
export class OrderService {

    constructor(@InjectRepository(Ordertbl) private orderentity: Repository<Ordertbl>){}
    // constructor(@InjectRepository(order) private orderentity: Repository<order>){}

    getOrderCake(orderdto: orderdto){
        const ordata = this.orderentity.save(orderdto);
        return ordata;
    }

    getalldata(): Promise<orderdto[]>{
        const all = this.orderentity.find();
        if (!all){
            throw new HttpException ('Not Found', HttpStatus.NOT_FOUND)
        }
        return all;
    }

    async getUpdateDate(orderid: string, data: Partial<orderdto>){
        const updated = this.orderentity.findOne(orderid)

        if (!updated){
            throw new HttpException ('Not Found', HttpStatus.NOT_FOUND)
        }
       await this.orderentity.update(orderid, data)
        return updated;
         
    }


    async getDestroyData(orderid): Promise<any>{
        const deld = this.orderentity.findOne(orderid)
        if (!deld){
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
        }
        
        await this.orderentity.delete(orderid)
        return deld;
          
        
    }
    
}
