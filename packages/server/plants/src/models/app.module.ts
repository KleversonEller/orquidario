import { Module } from '@nestjs/common';

import { PlantsController } from 'src/controllers/plants.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PlantsRepository } from 'src/repositories/plants.repository';
import { PrismaPlantsRepository } from 'src/repositories/prisma/prisma.plants.repository';
import { PlantsService } from 'src/services/plants.service';

@Module({
  imports: [],
  controllers: [PlantsController],
  providers: [
    PlantsService,
    PrismaService,
    {
      provide: PlantsRepository,
      useClass: PrismaPlantsRepository,
    },
  ],
})
export class AppModule {}
