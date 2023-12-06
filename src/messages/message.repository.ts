import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';
import { iMessageData } from 'src/interface/message.interface';

@Injectable()
export class MessageRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dataMessage: iMessageData, userId: string) {
    const getChat = await this.prisma.chat.findFirst();

    const createMessage = await this.prisma.message.create({
      data: {
        text: dataMessage.text,
        chat: { connect: { id: getChat.id } },
        sendBy: { connect: { id: userId } },
      },
    });

    return createMessage;
  }
}
