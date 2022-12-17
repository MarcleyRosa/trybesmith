import { Request, Response } from 'express';
import { tokenUser } from '../middlewares/jwtFunction';
import UserService from '../services/user.service';

export default class UserController {
  constructor(private service = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const newUser = req.body;
    await this.service.create(newUser);

    const token = tokenUser(newUser);

    return res.status(201).json({ token });
  };
}
