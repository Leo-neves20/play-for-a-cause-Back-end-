import * as bcrypt from 'bcrypt';
import { iUserData } from 'src/interface/user.interface';

export class UserSchema {
  constructor(private userData: iUserData) {}

  body() {
    return {
      id: this.userData.id,
      name: this.userData.name,
      email: bcrypt.hashSync(this.userData.email, 10),
      password: bcrypt.hashSync(this.userData.password, 10),
      urlPhoto: this.userData.urlPhoto,
    };
  }

  bodyShowEmail() {
    return {
      id: this.userData.id,
      name: this.userData.name,
      email: this.userData.email,
      password: bcrypt.hashSync(this.userData.password, 10),
      urlPhoto: this.userData.urlPhoto,
    };
  }
}
