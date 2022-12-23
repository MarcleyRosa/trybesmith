import { Request, Response } from 'express';
import { ReturnToken } from '../interface';
import { verifyToken } from '../middlewares/jwtFunction';
import OrdersService from '../services/orders.service';
import UserService from '../services/user.service';

export default class OrdersController {
  constructor(private service = new OrdersService(), private userService = new UserService()) {}

  public getAllIds = async (_req: Request, res: Response) => {
    const getAll = await this.service.getAllIds();
    return res.status(200).json(getAll);
  };

  public create = async (req: Request, res: Response) => {
    const products = req.body;

    const { authorization } = req.headers;

    const user = verifyToken(authorization as string);

    const [getBy] = await this.userService.getById(user as ReturnToken);
    
    const insert = await this.service.create(products, getBy);
    console.log(insert);
    
    return res.status(200).json({ userId: getBy, productsIds: products });
  };
}
