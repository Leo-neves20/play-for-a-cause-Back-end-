import { IsNotEmpty } from 'class-validator';

export class MessageDTO {
  @IsNotEmpty({
    message: "Nome não pode ser vazio. chave: 'name'",
  })
  text: string;
}
