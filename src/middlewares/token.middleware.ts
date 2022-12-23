import { NextFunction, Request, Response } from 'express';
import { isToken } from './schame';

export default class TokenValidation {
  constructor(private typeError = 'any.required') {}

  public validation = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const { error } = isToken.validate(authorization);
   
    if (error) return res.status(401).json({ message: 'Invalid token' });
    
    return next();
  };
}
