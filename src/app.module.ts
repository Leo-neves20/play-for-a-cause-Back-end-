import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { MessageModule } from './messages/message.module';

@Module({
  imports: [UserModule, MessageModule],
})
export class AppModule {}
