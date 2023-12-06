import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserTokenMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  async use(req: any, res: any, next: (error?: any) => void) {
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(401).json({ message: 'Não autorizado' });
    }

    try {
      const payload = await this.jwtService.verifyAsync(token.split(' ')[1], {
        secret: process.env.SECRET_KEY,
      });

      req['userPayload'] = payload;
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: 'token inválido' });
    }

    next();
  }
}
