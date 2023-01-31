import { Plants } from '@prisma/client';

export abstract class PlantsRepository {
  abstract create(
    name: string,
    color: string,
    species: string,
    image?: any,
    state?: boolean,
  ): Promise<string | Plants>;

  abstract getAllPlants(): Promise<Plants[]>;
}
