import { Injectable } from '@nestjs/common';
import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { PrismaService } from 'src/config/prisma.service';
@Injectable()
@ValidatorConstraint({
  async: true,
})
export class EmailValidation implements ValidatorConstraintInterface {
  constructor(private FindUserByEmail: FindUserByEmail) {}

  validate(email: any): Promise<boolean> {
    const isAlreadyEmail = this.FindUserByEmail.findEmail(email);
    return isAlreadyEmail;
  }
}

export class FindUserByEmail {
  constructor(private readonly prisma: PrismaService) {}

  async findEmail(userEmail: string) {
    const getUserByEmail = this.prisma.user.findFirst({
      where: { email: userEmail },
    });

    return getUserByEmail === undefined || getUserByEmail === null;
  }
}

export const IsUniqueEmail = (optionsValidation: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: optionsValidation,
      constraints: [],
      validator: EmailValidation,
    });
  };
};
