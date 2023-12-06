import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from '@prisma/client';
import { iUserRequest } from 'src/interface/user.interface';
import { UserSchema } from 'src/schema/user.schema';

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  private passwordRegex =
    /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*[A-Z]).+$/;

  async listUsers() {
    const response = await this.repository.list();
    return response;
  }

  async createUser(userData: iUserRequest) {
    if (!userData.urlPhoto) {
      userData.urlPhoto =
        'https://cdn.icon-icons.com/icons2/2942/PNG/512/profile_icon_183860.png';
    }

    const response = await this.repository.create(userData);
    return new UserSchema(response).bodyShowEmail();
  }

  async getUsersByEmail(email: string) {
    const response = await this.repository.findOneByEmail(email);

    if (!response) {
      throw new Error('Usuário não encontrado');
    }

    return response;
  }

  async updateUser(id: string, dataUpdate: Partial<User>) {
    const userData = await this.repository.findUserById(id);

    if (!userData) {
      throw new Error('Usuário não encontrado');
    }

    Object.entries(dataUpdate).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      userData[chave] = valor;
    });

    const updateResponse = this.repository.update(userData);

    return updateResponse;
  }

  async userPasswordValidation(userPassword: string) {
    return this.passwordRegex.test(userPassword);
  }
}
