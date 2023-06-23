import { Controller, Get, Post, Body } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { CreateAssetDTO } from './assets.dto';

@Controller('assets')
export class AssetsController {
  constructor(private assetService: AssetsService) {}

  @Get()
  list() {
    return this.assetService.listAll();
  }

  @Post()
  create(@Body() data: CreateAssetDTO) {
    return this.assetService.create(data);
  }
}
