import { Controller, Get, Post, Body } from '@nestjs/common';

import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './orders.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  list() {
    return this.ordersService.listAll();
  }

  @Post()
  create(@Body() data: CreateOrderDTO) {
    return this.ordersService.create(data);
  }
}
