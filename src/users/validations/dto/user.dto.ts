import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { IsUniqueEmail } from '../email.validation';
import { IsPasswordValid } from '../password.validation';
import { IsUserCodeValid } from '../userCode.validation';

export class UserCreateDTO {
  @IsNotEmpty({
    message: "Nome não pode ser vazio. chave: 'name'",
  })
  name: string;

  @IsEmail(undefined, { message: 'Email inválido' })
  @IsUniqueEmail({
    message: "Este email já está cadastrado. chave: 'email'",
  })
  email: string;

  @MinLength(6, {
    message: "a senha precisa ter no minimo 6 dígitos, chave: 'password'",
  })
  @IsPasswordValid({
    message:
      "A senha deve conter um caracter especial e uma letra maiúscula, chave: 'password'",
  })
  password: string;

  @IsNotEmpty({
    message: "código do usuário não pode ser vazio, chave: 'userCode'",
  })
  @IsUserCodeValid({
    message: "Código do usuário já existe. chave: 'userCode'",
  })
  userCode: string;

  @IsNotEmpty({
    message: "não é possível criar um usuário sem foto. chave: 'urlPhoto'",
  })
  urlPhoto: string;

  talkId: string;
}
