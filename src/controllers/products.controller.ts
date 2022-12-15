import { Request, Response } from 'express';
import { tokenUser } from '../middlewares/jwtFunction';
import { postProductService, getAllProductsService,
  postUserService } from '../services/products.service';

export const getAllProducts = async (req: Request, res: Response) => {
  const getAllController = await getAllProductsService();

  return res.status(200).json(getAllController);
};

export const postProduct = async (req: Request, res: Response) => {
  const products = req.body;
  const addProducts = await postProductService(products);

  return res.status(201).json({ id: addProducts, ...products });
};

export const postUser = async (req: Request, res: Response) => {
  const newUser = req.body;
  await postUserService(newUser);

  const token = tokenUser(newUser);

  res.status(201).json({ token });
};
