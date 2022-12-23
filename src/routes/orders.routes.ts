import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import ProductsIdsValidation from '../middlewares/order.middleware';
import TokenValidation from '../middlewares/token.middleware';

const router = Router();

const ordersController = new OrdersController();
const token = new TokenValidation();
const validation = new ProductsIdsValidation();

router.get('/', ordersController.getAllIds);

router.post('/', token.validation, validation.productsIds, ordersController.create);

export default router;