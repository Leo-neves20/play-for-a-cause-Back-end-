import { PrismaService } from 'src/config/prisma.service';

export class ChatRepository {
  constructor(private readonly prisma: PrismaService) {}
}
