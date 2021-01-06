import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
// import { Ordertbl } from 'src/Shared/order.dto';
import {Ordertbl} from '../order/order.entity';
import { OrderService } from './order.service';
import { from } from 'rxjs';

@Controller('order')
export class OrderController {

    constructor (private service: OrderService){}

    @Post()
    async OderCake(@Body() orderdto: orderdto){
        return this.service.getOrderCake(orderdto);
    }

    @Get()
    async getdata(){
        return this.service.getalldata()
    }

    @Put(':orderid')
    updateData(@Param('orderid') orderid: string, @Body() orderdto: Partial<orderdto>){
        return this.service.getUpdateDate(orderid, orderdto);
    }

    @Delete(':orderid')
    destroyData(@Param('orderid') orderid: string){
        return this.service.getDestroyData(orderid);
    }

    
}
