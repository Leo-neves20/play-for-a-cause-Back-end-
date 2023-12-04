import { OnModuleInit } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  origin: '*',
})
export class GetwayService implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log('user connected');
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    });
  }

  @SubscribeMessage('message')
  handleEvent(@ConnectedSocket() client: Socket, @MessageBody() data: unknown) {
    client.broadcast.emit('chat_message', data);
  }
}
