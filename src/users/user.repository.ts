import { PrismaService } from 'src/config/prisma.service';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { iUserRequest } from 'src/interface/user.interface';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async list() {
    const request = await this.prisma.user.findMany();
    return request;
  }

  async create(usersData: iUserRequest) {
    const request = await this.prisma.user.create({ data: usersData });
    return request;
  }

  async update(userData: Partial<User>) {
    const request = await this.prisma.user.update({
      where: { id: userData.id },
      data: userData,
    });
    return request;
  }

  async findOneByEmail(email: string) {
    const userEmail = await this.prisma.user.findFirst({
      where: { email: email },
    });

    return userEmail;
  }

  async findUserById(id: string) {
    const userId = await this.prisma.user.findFirst({ where: { id: id } });
    return userId;
  }
}
