import { Module } from '@nestjs/common';
import { UserContrller } from './user.controller';
import { UserService } from './user.service';
import { EmailValidation } from './validations/email.validation';

@Module({
  controllers: [UserContrller],
  providers: [UserService, EmailValidation],
})
export class UserModule {}
