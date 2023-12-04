import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { EmailValidation } from "./validations/email.validation";
import { UserRepository } from "./user.repository";
import { PrismaService } from "src/config/prisma.service";
import { UserCodeValidator } from "./validations/userCode.validation";
import { PasswordValidator } from "./validations/password.validation";

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    EmailValidation,
    UserRepository,
    PrismaService,
    EmailValidation,
    UserCodeValidator,
    PasswordValidator
  ],
})
export class UserModule {}
