import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/config/prisma.service";

@Injectable()
export class ChatRepository {
  constructor(private readonly prisma: PrismaService) {}
}
