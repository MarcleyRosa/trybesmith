import { NextFunction, Request, Response } from 'express';
import { funcValidation, isLevel, isPassword } from './schame';

export default class UserValidation {
  constructor(private typeError = 'any.required') {}

  public usernameMiddle = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body;
    const { error } = funcValidation('username').validate(username);

    if (error) {
      const typeStatus = error?.details[0].type === this.typeError ? 400 : 422;
      return res.status(typeStatus).json({ message: error.message });
    }
    
    return next();
  };

  public vocationMiddle = async (req: Request, res: Response, next: NextFunction) => {
    const { vocation } = req.body;
    const { error } = funcValidation('vocation').validate(vocation);

    if (error) {
      const typeStatus = error?.details[0].type === this.typeError ? 400 : 422;
      return res.status(typeStatus).json({ message: error.message });
    }
    
    return next();
  };

  public levelMiddle = async (req: Request, res: Response, next: NextFunction) => {
    const { level } = req.body;
    const { error } = isLevel.validate(level);

    if (error) {
      const typeStatus = error?.details[0].type === this.typeError ? 400 : 422;
      return res.status(typeStatus).json({ message: error.message });
    }
    
    return next();
  };

  public passwordMiddle = async (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;
    const { error } = isPassword.validate(password);

    if (error) {
      const typeStatus = error?.details[0].type === this.typeError ? 400 : 422;
      return res.status(typeStatus).json({ message: error.message });
    }
    
    return next();
  };
}
