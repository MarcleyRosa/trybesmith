import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  constructor(private service = new ProductsService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.service.getAll();

    return res.status(200).json(products);
  };
}

// export const getAllProducts = async (req: Request, res: Response) => {
//   const getAllController = await getAllProductsService();

//   return res.status(200).json(getAllController);
// };

// export const postProduct = async (req: Request, res: Response) => {
//   const products = req.body;
//   const addProducts = await postProductService(products);

//   return res.status(201).json({ id: addProducts, ...products });
// };

// export const postUser = async (req: Request, res: Response) => {
//   const newUser = req.body;
//   await postUserService(newUser);

//   const token = tokenUser(newUser);

//   res.status(201).json({ token });
// };

// export const getAllOrders = async (req: Request, res: Response) => {
//   const getAll = await getOrdersService();
//   res.status(200).json(getAll);
// };
