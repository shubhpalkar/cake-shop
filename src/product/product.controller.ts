import { Post } from '@nestjs/common';
import { Body, Controller, Get } from '@nestjs/common';
import { Producttbl } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor (private prodService: ProductService){}

    @Post()
    productdata(@Body() product: Producttbl){
        return this.prodService.getProductdata(product);
    }


    @Get()
    findAll(){
        return this.prodService.getfindAll();
    }

    
}
