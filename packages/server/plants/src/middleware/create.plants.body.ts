import { IsNotEmpty } from 'class-validator';

export class CreatePlantsBody {
  @IsNotEmpty({
    message: 'O Nome da planta é um campo obrigatório !',
  })
  name: string;

  image?: any;

  @IsNotEmpty({
    message: 'A Cor da planta é um campo obrigatório !',
  })
  color: string;

  @IsNotEmpty({
    message: 'A Espécie da planta é um campo obrigatório !',
  })
  species: string;

  state?: boolean;
}
