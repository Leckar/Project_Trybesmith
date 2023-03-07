import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import productIdValidation from '../middlewares/orderDataValidation';
import tokenValidation from '../middlewares/tokenValidation';

const router = Router();

router.get(
  '/',
  ordersController.getAll,
);
router.post(
  '/',
  tokenValidation,
  productIdValidation,
  ordersController.registerOrder,
);

export = router;
