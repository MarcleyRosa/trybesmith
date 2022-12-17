import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import LoginMiddle from '../middlewares/middleLogin';

const router = Router();

const loginMiddle = new LoginMiddle();

const userController = new LoginController();

router.post('/', loginMiddle.middleUser, userController.getByUser);

export default router;