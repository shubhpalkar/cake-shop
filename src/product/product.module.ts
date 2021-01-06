import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producttbl } from './product.entity';
import { Payment } from 'src/Shared/payment.dto';

@Module({
  imports: [TypeOrmModule.forFeature([Producttbl])],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
