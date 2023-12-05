import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { EmailValidation } from './validations/email.validation';
import { UserRepository } from './user.repository';
import { PrismaService } from 'src/config/prisma.service';
import { PasswordValidator } from './validations/password.validation';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    EmailValidation,
    UserRepository,
    PrismaService,
    EmailValidation,
    PasswordValidator,
  ],
})
export class UserModule {}
