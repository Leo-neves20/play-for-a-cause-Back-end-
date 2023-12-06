import { Body, Controller, Post, Request } from '@nestjs/common';
import { MessageDTO } from 'src/DTO/message.dto';
import { MessageService } from './message.service';

@Controller('/message')
export class MessageController {
  constructor(private service: MessageService) {}

  @Post()
  async createMessage(@Request() req, @Body() messageData: MessageDTO) {
    const response = await this.service.create(
      messageData,
      req.userPayload.userId,
    );
    console.log('#############', response);
  }
}
