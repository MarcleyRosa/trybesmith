import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/login.service';
import { isProductsIds } from './schame';

export default class ProductsIdsValidation {
  constructor(private service = new LoginService()) {}

  public productsIds = async (req: Request, res: Response, next: NextFunction) => {
    const { productsIds } = req.body;
    const { error } = isProductsIds.validate(productsIds);
    
    if (error) {
      const typeStatus = error?.details[0].type === 'any.required' ? 400 : 422;
      return res.status(typeStatus).json({ message: error.message });
    }
    
    return next();
  };
}
