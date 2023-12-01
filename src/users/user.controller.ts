import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserCreateDTO } from "./validations/dto/user.dto";

@Controller("/users")
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get("/:userCode")
  async getUserByCode() {}

  @Post()
  async createUser(@Body() userData: UserCreateDTO) {
    const createUser = await this.service.createUser(userData);
    return createUser;
  }
}
