import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from "class-validator";
import { UserService } from "../user.service";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({
  async: true,
})
export class PasswordValidator implements ValidatorConstraintInterface {
  constructor(private userService: UserService) {}

  async validate(value: string): Promise<boolean> {
    const isValid = await this.userService.userPasswordValidation(value);
    return isValid;
  }
}

export const IsPasswordValid = (optionsValidation: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: optionsValidation,
      constraints: [],
      validator: PasswordValidator,
    });
  };
};
