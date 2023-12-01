import { PrismaService } from "src/config/prisma.service";

export class AuthorizationRepository {
    constructor(private readonly prisma: PrismaService){}
}
