import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserModule } from './users/user.module';
import { MessageModule } from './messages/message.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { SocketModule } from './socket/socket.module';
import { ChatModule } from './chat/chat.module';
import { UserTokenMiddleware } from './middleware/token.middleware';
import { UserController } from './users/user.controller';
import { MessageController } from './messages/message.controller';
import { ChatController } from './chat/chat.controller';

@Module({
  imports: [
    UserModule,
    MessageModule,
    AuthorizationModule,
    SocketModule,
    ChatModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserTokenMiddleware)
      .exclude({
        path: '/users',
        method: RequestMethod.POST,
      })
      .forRoutes(UserController, MessageController, ChatController);
  }
}
