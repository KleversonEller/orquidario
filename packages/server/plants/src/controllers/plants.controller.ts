import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreatePlantsBody } from 'src/middleware/create.plants.body';
import { PlantsService } from '../services/plants.service';

@Controller('plants')
export class PlantsController {
  constructor(private readonly appService: PlantsService) {}

  @Post('create')
  async create(@Body() data: CreatePlantsBody) {
    await this.appService.create(data);

    return { message: 'Planta cadastrada com sucesso !' };
  }

  @Get()
  async getAllPlants() {
    return this.appService.getAllPlants();
  }
}
