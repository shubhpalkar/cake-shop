import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Ordertbl from 'src/order/order.entity';
//import { Payment } from 'src/Shared/payment.dto';
import { Repository } from 'typeorm';
import { Producttbl } from './product.entity';

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Producttbl) private productentity: Repository<Producttbl>){}
    // @InjectRepository(Payment) private paymententity: Repository<Payment>

    getProductdata(product): Promise<any>{
        const data = this.productentity.save(product);  
        if (!data){
            throw new HttpException ('Not Found', HttpStatus.NOT_FOUND)
        }
        return data;
    }


      getfindAll(): Promise<any> {
         return this.productentity.find();
        
 }
}
