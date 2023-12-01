import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    this.$connect();
  }
  // $connect(): Promise<void> {
  //   throw new Error('Method not implemented.');
  // }
}
