import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({
  async: true,
})
export class UserCodeValidator implements ValidatorConstraintInterface {
  constructor(private repository: UserRepository) {}

  async validate(value: string): Promise<boolean> {
    const findUser = await this.repository.findOneByUserCode(value);
    return !!findUser;
  }
}

export const IsUserCodeValid = (optionsValidation: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: optionsValidation,
      constraints: [],
      validator: UserCodeValidator,
    });
  };
};
