import { UserLogin } from '../interface';
import LoginModel from '../models/login.models';

export default class LoginService {
  constructor(public model = new LoginModel()) {}

  public async getByUser(user: UserLogin) {
    const findUser = await this.model.getByUser(user);

    if (!findUser.length) return { type: 401, message: 'Username or password invalid' };

    return { type: null, message: findUser[0] };
  }
}