import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/config/prisma.service";

@Injectable()
export class MessageRepository {
  constructor(private readonly prisma: PrismaService) {}
}
