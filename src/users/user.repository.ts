import { PrismaService } from "src/config/prisma.service";
import { iUserData } from "./interfaces";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  private passwordRegex =
    /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*[A-Z]).+$/;

  async create(usersData: iUserData) {
    const request = await this.prisma.user.create({ data: usersData });
    return request;
  }

  async findOneByEmail(email: string) {
    const isEmail = await this.prisma.user.findFirst({
      where: { email: email },
    });

    return !!isEmail;
  }

  async findOneByUserCode(userCode: string) {
    const isUserCode = await this.prisma.user.findFirst({
      where: { userCode: userCode },
    });

    return !!isUserCode;
  }
}
