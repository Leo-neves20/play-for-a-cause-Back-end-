import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDTO } from './validations/dto/user.dto';
import { UserUpdateDTO } from './validations/dto/userUpdate.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async userList() {
    const response = await this.service.listUsers();
    return response;
  }

  @Get('/email/:userEmail')
  async getUserByEmail(@Param('userEmail') userEmail: string) {
    const response = await this.service.getUsersByEmail(userEmail);
    return response;
  }

  @Post()
  async createUser(@Body() userData: UserCreateDTO) {
    const response = await this.service.createUser(userData);
    return response;
  }

  @Patch('/update/:id')
  async updateUser(@Param('id') id: string, @Body() userData: UserUpdateDTO) {
    const response = await this.service.updateUser(id, userData);
    return response;
  }
}
