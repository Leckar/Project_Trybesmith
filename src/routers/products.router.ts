import { Router } from 'express';
import productsController from '../controllers/products.controller';
import productMiddlewares from '../middlewares/productsValidation';

const { newProductValidation } = productMiddlewares;

const router = Router();

router.post(
  '/',
  newProductValidation,
  productsController.create,
);
router.get(
  '/',
  productsController.getAll,
);

export = router;
