import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';
import { verifyToken } from '../middlewares/jwtFunction';

export default class OrdersController {
  constructor(private service = new OrdersService()) {}

  public getAllIds = async (_req: Request, res: Response) => {
    const getAll = await this.service.getAllIds();
    res.status(200).json(getAll);
  };

  public create = async (req: Request, res: Response) => {
    const products = req.body;
    const { authorization } = req.headers;
    const tokenVerify = verifyToken(authorization as string);
    console.log(tokenVerify);
    
    const getAll = await this.service.create(products);
    res.status(200).json(getAll);
  };
}
