import { Injectable, UnauthorizedException } from '@nestjs/common';
import { iUserLogin } from 'src/interface/user.interface';
import { UserService } from 'src/users/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthorizationService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(userData: iUserLogin) {
    const getUser = await this.userService.getUsersByEmail(userData.email);

    if (!getUser) {
      throw new UnauthorizedException('Email ou senha incorreto');
    }

    const passwordVerify = bcrypt.compare(userData.password, userData.password);

    if (!passwordVerify) {
      throw new UnauthorizedException('Email ou senha incorreto');
    }

    const payload = {
      userId: getUser.id,
    };

    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
