import { Injectable } from '@nestjs/common';
import { ChatRepository } from './chat.repository';

@Injectable()
export class ChatService {
  constructor(private readonly repository: ChatRepository) {}

  async listChat() {
    const response = await this.repository.list();
    return response;
  }
}
