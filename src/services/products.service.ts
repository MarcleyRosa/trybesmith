import { InterProducts, User } from '../interface';
// import { getAllProductsModel, getOrdersModel, postProductModel,
//   postUserModel } from '../models/products.model';

import ProductsModel from '../models/products.model';

export default class ProductsService {
  constructor(public model = new ProductsModel()) {
  }

  public async getAll(): Promise<InterProducts[]> {
    const products = await this.model.getAll();
    console.log(products);
    
    return products;
  }

  public async create(products: User): Promise<number> {
    const postProduct = await this.model.create(products);

    return postProduct;
  }
}

// export const getAllProductsService = async () => {
//   const getAll = await getAllProductsModel();

//   return getAll;
// };

// export const postProductService = async (products: User): Promise<number> => {
//   const postProduct = await postProductModel(products);

//   return postProduct;
// };

// export const postUserService = async (newUser: NewUser): Promise<number> => {
//   const userId = await postUserModel(newUser);

//   return userId;
// };

// export const getOrdersService = async () => {
//   const getAllOrders = await getOrdersModel();
//   return getAllOrders;
// };