import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  constructor(private service = new OrdersService()) {}

  public getAllIds = async (_req: Request, res: Response) => {
    const getAll = await this.service.getAllIds();
    res.status(200).json(getAll);
  };
}
