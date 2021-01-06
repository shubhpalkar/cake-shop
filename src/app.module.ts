import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { Producttbl } from './product/product.entity';
import { ProductModule } from './product/product.module';
import { HttpErrorFliter } from './Shared/http_error.filter';
import { loggingInterceptor } from './Shared/logging.interceptor';

@Module({
  imports: [TypeOrmModule.forRoot(), OrderModule, ProductModule],
  controllers: [AppController],
  providers: [AppService,{ provide: APP_FILTER, useClass: HttpErrorFliter },
    { provide: APP_INTERCEPTOR, useClass: loggingInterceptor }],
  })


export class AppModule { }
