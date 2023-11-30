import {
  ValidationOptions,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

export class PasswordValidation implements ValidatorConstraintInterface {
  constructor(private PasswordVerification: PasswordVerification) {}

  validate(value: string): Promise<boolean> {
    const isValid = this.PasswordVerification.validate(value);
    return isValid;
  }
}

class PasswordVerification {
  private passwordRegex =
    /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*[A-Z]).+$/;

  async validate(userPassword: string) {
    return this.passwordRegex.test(userPassword);
  }
}

export const IsPasswordValid = (optionsValidation: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: optionsValidation,
      constraints: [],
      validator: PasswordValidation,
    });
  };
};
