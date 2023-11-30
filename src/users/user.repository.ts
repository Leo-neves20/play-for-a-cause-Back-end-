import { PrismaService } from 'src/config/prisma.service';

export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}
}
