import { Module } from '@nestjs/common';
import { GetwayService } from './socket.connection';

@Module({
  providers: [GetwayService],
})
export class SocketModule {}
