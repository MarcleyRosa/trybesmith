import OrdersModel from '../models/orders.model';

export default class OrdersService {
  constructor(public model = new OrdersModel()) {}

  public async getAllIds() {
    const getAllOrders = await this.model.getAllIds();
    return getAllOrders;
  }

  public async create(userId: number): Promise<number> {
    const postProduct = await this.model.create(userId);

    return postProduct;
  }

  public async update(pruducts: number[], id: number) {
    await Promise.all(pruducts.map(async (prod) => {
      const updated = this.model.update(prod, id);
      return updated;
    }));
  }
}
