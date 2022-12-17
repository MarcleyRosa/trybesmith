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

// export const getOrdersService = async () => {
//   const getAllOrders = await getOrdersModel();
//   return getAllOrders;
// };