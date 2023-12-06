import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
      throw new HttpException(
        'Email ou senha inválido',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const passwordVerify = bcrypt.compare(userData.password, userData.password);

    if (!passwordVerify) {
      throw new HttpException(
        'Email ou senha inválido',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const payload = {
      userId: getUser.id,
    };

    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
