import { Router } from 'express';
import usersController from '../controllers/users.controller';
import usersValidation from '../middlewares/usersValidation';

const { newUserValidation } = usersValidation;

const router = Router();

router.post(
  '/',
  newUserValidation,
  usersController.create,
);

export = router;
