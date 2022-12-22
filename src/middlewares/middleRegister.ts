import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/login.service';
import { isName, isAmount } from './schame';

export default class RegisterValidation {
  constructor(private service = new LoginService()) {}

  public middleName = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    const { error } = isName.validate(name);

    console.log(error);
    
    if (error) {
      const typeStatus = error?.details[0].type === 'any.required' ? 400 : 422;
      return res.status(typeStatus).json({ message: error.message });
    }
    
    return next();
  };

  public middleAmount = async (req: Request, res: Response, next: NextFunction) => {
    const { amount } = req.body;
    const { error } = isAmount.validate(amount);

    if (error) {
      const typeStatus = error?.details[0].type === 'any.required' ? 400 : 422;
      return res.status(typeStatus).json({ message: error.message });
    }
    
    return next();
  };
}
