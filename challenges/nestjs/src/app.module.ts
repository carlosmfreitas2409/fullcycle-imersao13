import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';

import { AssetsModule } from './assets/assets.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [PrismaModule, AssetsModule, OrdersModule],
})
export class AppModule {}
