import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  constructor(private service = new ProductsService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.service.getAll();

    return res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const products = req.body;
    const addProducts = await this.service.create(products);

    return res.status(201).json({ id: addProducts, ...products });
  };
}

// export const getAllOrders = async (req: Request, res: Response) => {
//   const getAll = await getOrdersService();
//   res.status(200).json(getAll);
// };
