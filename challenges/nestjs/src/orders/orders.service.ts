import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateOrderDTO } from './orders.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  listAll() {
    return this.prisma.order.findMany();
  }

  create(data: CreateOrderDTO) {
    return this.prisma.order.create({
      data: {
        asset_id: data.asset_id,
        price: data.price,
        status: 'PENDING',
      },
    });
  }
}
