import { Request, Response } from 'express';
import { NewUser } from '../interface';
import { tokenUser } from '../middlewares/jwtFunction';
import LoginService from '../services/login.service';

export default class LoginController {
  constructor(private service = new LoginService()) {}

  public getByUser = async (req: Request, res: Response) => {
    const userInfo = req.body;
    const { type, message } = await this.service.getByUser(userInfo);
    
    if (type) return res.status(type).json({ message });

    console.log(message);
    
    const token = tokenUser(message as NewUser);

    return res.status(200).json({ token });
  };
}
