import { Module } from '@nestjs/common';
import { UserContrller } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserContrller],
  providers: [UserService],
})
export class UserModule {}
