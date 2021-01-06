import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Ordertbl } from 'src/Shared/order.dto';
import { OrderController } from './order.controller';
import { Ordertbl } from './order.entity';
import { OrderService } from './order.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ordertbl]), ],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService, TypeOrmModule.forFeature([Ordertbl]) ]
})
export class OrderModule {}
