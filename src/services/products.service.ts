import { NewUser, User } from '../interface';
import { getAllProductsModel, postProductModel, postUserModel } from '../models/products.model';

export const getAllProductsService = async () => {
  const getAll = await getAllProductsModel();

  return getAll;
};

export const postProductService = async (products: User): Promise<number> => {
  const postProduct = await postProductModel(products);

  return postProduct;
};

export const postUserService = async (newUser: NewUser): Promise<number> => {
  const userId = await postUserModel(newUser);

  return userId;
};