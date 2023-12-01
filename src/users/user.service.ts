import { Injectable } from "@nestjs/common";
import { iUserData } from "./interfaces";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  private passwordRegex =
    /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*[A-Z]).+$/;

  async createUser(userData: iUserData) {
    const userCreate = this.repository.create(userData);
    return userCreate;
  }

  async userPasswordValidation(userPassword: string){
    return this.passwordRegex.test(userPassword);
  }

}
