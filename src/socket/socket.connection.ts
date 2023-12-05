import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(3030, { cors: { origin: 'http://localhost:3001' } })
export class GetwayService {
  @WebSocketServer() server: Server;

  @SubscribeMessage('sendMessage')
  handleMessage(client: Socket, payload: any | null): void {
    client.emit('sendMessage', payload);
  }
}
