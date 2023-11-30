import { PrismaService } from 'src/config/prisma.service';

export class MessageRepository {
  constructor(private readonly prisma: PrismaService) {}
}
