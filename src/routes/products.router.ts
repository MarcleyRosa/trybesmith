import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import RegisterValidation from '../middlewares/middleRegister';

const router = Router();

const productsController = new ProductsController();
const middle = new RegisterValidation();

router.get('/', productsController.getAll);

router.post('/', middle.middleName, middle.middleAmount, productsController.create);

export default router;