import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/login.service';
import { userLogin } from './schame';

export default class LoginMiddle {
  constructor(private service = new LoginService()) {}

  public middleUser = async (req: Request, res: Response, next: NextFunction) => {
    const infoUser = req.body;
    const { error } = userLogin.validate(infoUser);
    
    if (error) return res.status(400).json({ message: error.message });
    
    return next();
  };
}
