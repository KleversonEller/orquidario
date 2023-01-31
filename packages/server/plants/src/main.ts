import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './models/app.module';

const port = process.env.PORT || 3013;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port, () => console.log(`Rodando na porta ${port}`));
}
bootstrap();
