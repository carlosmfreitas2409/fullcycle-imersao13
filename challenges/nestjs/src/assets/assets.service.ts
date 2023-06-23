import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateAssetDTO } from './assets.dto';

@Injectable()
export class AssetsService {
  constructor(private readonly prisma: PrismaService) {}

  listAll() {
    return this.prisma.asset.findMany();
  }

  create(data: CreateAssetDTO) {
    return this.prisma.asset.create({ data });
  }
}
