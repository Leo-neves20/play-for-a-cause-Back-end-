import { Module } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import { AuthorizationController } from './authorization.controller';
import { PrismaService } from 'src/config/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/users/user.service';
import { UserRepository } from 'src/users/user.repository';
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthorizationService, PrismaService, UserService, UserRepository],
  controllers: [AuthorizationController],
})
export class AuthorizationModule {}
