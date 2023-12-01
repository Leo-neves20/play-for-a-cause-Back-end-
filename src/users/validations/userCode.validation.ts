import {
  ValidationOptions,
  ValidatorConstraintInterface,
  registerDecorator,
} from "class-validator";
import { PrismaService } from "src/config/prisma.service";

export class UserCodeVerification implements ValidatorConstraintInterface {
  constructor(private readonly UserCodeValidation: UserCodeValidation) {}

  validate(value: string): Promise<boolean> {
    const findUser = this.UserCodeValidation.findUserCode(value);
    return findUser;
  }
}

class UserCodeValidation {
  constructor(private readonly prisma: PrismaService) {}

  async findUserCode(userCode: string) {
    const isUserCode = this.prisma.user.findFirst({
      where: { userCode: userCode },
    });

    return isUserCode === undefined || isUserCode === null;
  }
}

export const IsUserCodeValid = (optionsValidation: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      validator: UserCodeVerification,
      propertyName: property,
      options: optionsValidation,
      constraints: [],
    });
  };
};
