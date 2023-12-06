import { Optional } from '@nestjs/common';
import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { IsUniqueEmail } from 'src/validators/email.validation';
import { IsPasswordValid } from 'src/validators/password.validation';

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

  @IsOptional()
  urlPhoto: string;
}

export class UserUpdateDTO {
  @IsNotEmpty({
    message: "Nome não pode ser vazio. chave: 'name'",
  })
  @Optional()
  name: string;

  @IsEmail(undefined, { message: 'Email inválido' })
  @Optional()
  email: string;

  @MinLength(6, {
    message: "a senha precisa ter no minimo 6 dígitos, chave: 'password'",
  })
  @IsPasswordValid({
    message:
      "A senha deve conter um caracter especial e uma letra maiúscula, chave: 'password'",
  })
  @Optional()
  password: string;

  @Optional()
  urlPhoto: string;
}
