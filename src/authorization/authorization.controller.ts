import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import { UserLoginDTO } from 'src/DTO/user.dto';

@Controller('/signin')
export class AuthorizationController {
  constructor(private service: AuthorizationService) {}

  @Post()
  @HttpCode(200)
  async login(@Body() userData: UserLoginDTO) {
    const response = await this.service.signIn(userData);
    return response;
  }
}
