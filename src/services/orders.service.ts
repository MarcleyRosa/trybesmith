import { Pedido, UserId } from '../interface';
import OrdersModel from '../models/orders.model';

export default class OrdersService {
  constructor(public model = new OrdersModel()) {}

  public async getAllIds() {
    const getAllOrders = await this.model.getAllIds();
    return getAllOrders;
  }

  public async create(order: Pedido, userId: UserId): Promise<number> {
    const postProduct = await this.model.create(order, userId);

    return postProduct;
  }
}
