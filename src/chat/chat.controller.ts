import { Controller, Get, HttpCode } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('/chat')
export class ChatController {
  constructor(readonly service: ChatService) {}

  @Get()
  @HttpCode(200)
  async getChat() {
    const response = await this.service.listChat();
    return response;
  }
}
