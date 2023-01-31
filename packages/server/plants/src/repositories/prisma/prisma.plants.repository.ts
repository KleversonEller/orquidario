import { Injectable } from '@nestjs/common';

import { Plants } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { PlantsRepository } from '../plants.repository';

@Injectable()
export class PrismaPlantsRepository implements PlantsRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    name: string,
    color: string,
    species: string,
    image?: any,
    state?: boolean,
  ): Promise<Plants> {
    return this.prisma.plants.create({
      data: {
        name,
        color,
        species,
        image,
        state,
      },
    });
  }

  async getAllPlants(): Promise<Plants[]> {
    return this.prisma.plants.findMany();
  }
}
