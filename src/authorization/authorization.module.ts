import { Module } from "@nestjs/common";
import { AuthorizationService } from "./authorization.service";
import { AuthorizationController } from "./authorization.controller";
import { AuthorizationRepository } from "./authorization.repository";
import { PrismaService } from "src/config/prisma.service";

@Module({
  providers: [AuthorizationService, AuthorizationRepository, PrismaService],
  controllers: [AuthorizationController],
})
export class AuthorizationModule {}
