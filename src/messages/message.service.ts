import { Injectable } from "@nestjs/common";
import { MessageRepository } from "./message.repository";
import { iMessageData } from "src/interface/message.interface";

@Injectable()
export class MessageService {
  constructor(private repository: MessageRepository) {}

  async create(messageData: iMessageData, userId: string) {
    const response = this.repository.create(messageData, userId);
    return response;
  }

  async list() {
    const response = await this.repository.list();
    return response;
  }
}
