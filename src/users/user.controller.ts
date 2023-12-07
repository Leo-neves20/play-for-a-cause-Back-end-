import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { UserCreateDTO, UserUpdateDTO } from "src/DTO/user.dto";

@Controller("/users")
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async userList() {
    const response = await this.service.listUsers();
    return response;
  }

  @Get("/profile")
  async userProfile(@Request() req) {
    const response = await this.service.getUserById(req.userPayload.userId);
    return response;
  }

  @Post()
  async createUser(@Body() userData: UserCreateDTO) {
    const response = await this.service.createUser(userData);
    return response;
  }

  @Get("/email/:userEmail")
  async getUserByEmail(@Param("userEmail") userEmail: string) {
    const response = await this.service.getUsersByEmail(userEmail);
    return response;
  }

  @Patch("/update/:id")
  async updateUser(@Param("id") id: string, @Body() userData: UserUpdateDTO) {
    const response = await this.service.updateUser(id, userData);
    return response;
  }
}
