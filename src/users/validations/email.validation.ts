import { Injectable } from "@nestjs/common";
import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from "class-validator";
import { UserRepository } from "../user.repository";

@Injectable()
@ValidatorConstraint({
  async: true,
})
export class EmailValidation implements ValidatorConstraintInterface {
  constructor(private repository: UserRepository) {}

  async validate(email: string): Promise<boolean> {
    const isAlreadyEmail = await this.repository.findOneByEmail(email);
    return isAlreadyEmail;
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
