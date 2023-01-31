import { Injectable } from '@nestjs/common';
import { Plants } from '@prisma/client';

import { CreatePlantsBody } from 'src/middleware/create.plants.body';
import { PlantsRepository } from 'src/repositories/plants.repository';

@Injectable()
export class PlantsService {
  constructor(private plantsRepository: PlantsRepository) {}

  public async create(data: CreatePlantsBody): Promise<string | Plants> {
    const { name, color, species, image, state } = data;

    try {
      return this.plantsRepository.create(name, color, species, image, state);
    } catch (error) {}
  }

  public async getAllPlants(): Promise<Plants[]> {
    try {
      return this.plantsRepository.getAllPlants();
    } catch (error) {}
  }
}
