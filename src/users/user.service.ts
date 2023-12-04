import { Injectable } from "@nestjs/common";
import { iUserData } from "./interfaces";
import { UserRepository } from "./user.repository";
import { User } from "@prisma/client";

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  private passwordRegex =
    /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*[A-Z]).+$/;

  async listUsers() {
    const response = await this.repository.list();
    return response;
  }

  async getUsersByEmail(email: string) {
    const response = await this.repository.findOneByEmail(email);

    if (!response) {
      throw new Error("Usuário não encontrado");
    }

    return response;
  }

  async getUsersByCode(code: string) {
    const response = await this.repository.findOneByUserCode(code);

    if (!response) {
      throw new Error("Usuário não encontrado");
    }

    return response;
  }

  async createUser(userData: iUserData) {
    const response = this.repository.create(userData);
    return response;
  }

  async updateUser(id: string, dataUpdate: Partial<User>) {
    const userData = await this.repository.findUserById(id);

    if (!userData) {
      throw new Error("Usuário não encontrado");
    }

    Object.entries(dataUpdate).forEach(([chave, valor]) => {
      if (chave === "id") {
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
