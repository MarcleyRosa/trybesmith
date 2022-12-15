import { User } from '../interface';
import { getAllProductsModel, postProductModel } from '../models/products.model';

export const getAllProductsService = async () => {
  const getAll = await getAllProductsModel();

  return getAll;
};

export const postProductService = async (products: User): Promise<number> => {
  const postProduct = await postProductModel(products);

  return postProduct;
};