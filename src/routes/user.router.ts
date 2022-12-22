import { Router } from 'express';
import UserController from '../controllers/user.controller';
import UserValidation from '../middlewares/userMiddle';

const router = Router();

const userController = new UserController();
const user = new UserValidation();

router.post('/', user.usernameMiddle, user.vocationMiddle, user
  .levelMiddle, user.passwordMiddle, userController.create);

export default router;