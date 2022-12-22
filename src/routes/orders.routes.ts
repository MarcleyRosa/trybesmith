import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';

const router = Router();

const ordersController = new OrdersController();

router.get('/', ordersController.getAllIds);

router.post('/', ordersController.create);

export default router;