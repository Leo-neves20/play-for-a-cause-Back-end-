import { Module } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import { AuthorizationController } from './authorization.controller';
import { PrismaService } from 'src/config/prisma.service';

@Module({
  providers: [AuthorizationService, PrismaService],
  controllers: [AuthorizationController],
})
export class AuthorizationModule {}
