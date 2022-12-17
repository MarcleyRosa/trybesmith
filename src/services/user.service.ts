import { NewUser } from '../interface';
import UserModel from '../models/user.models';

export default class UserService {
  constructor(public model = new UserModel()) {}

  public async create(newUser: NewUser): Promise<number> {
    const userId = await this.model.create(newUser);

    return userId;
  }
}
