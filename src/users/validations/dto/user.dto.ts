import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { IsUniqueEmail } from '../email.validation';
import { IsPasswordValid } from '../password.validation';

export class UserCreateDTO {
  @IsNotEmpty({
    message: 'Nome não pode ser vazio',
  })
  name: string;

  @IsEmail(undefined, { message: 'Email inválido' })
  @IsUniqueEmail({
    message: 'Este email já está cadastrado',
  })
  email: string;

  @MinLength(6, { message: 'a senha precisa ter no minimo 6 dígitos' })
  @IsPasswordValid({
    message: 'A senha deve conter um caracter especial e uma letra maiúscula',
  })
  password: string;

  @IsNotEmpty({
    message: 'código do usuário não pode ser vazio',
  })
  userCode: string;

  @IsNotEmpty({
    message: 'não é possível criar um usuário sem foto',
  })
  urlPhoto: string;
}
