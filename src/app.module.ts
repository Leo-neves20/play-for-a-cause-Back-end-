import { Module } from "@nestjs/common";
import { UserModule } from "./users/user.module";
import { MessageModule } from "./messages/message.module";
import { AuthorizationModule } from "./authorization/authorization.module";

@Module({
  imports: [UserModule, MessageModule, AuthorizationModule],
})
export class AppModule {}
