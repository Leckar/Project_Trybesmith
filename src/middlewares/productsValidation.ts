import { NextFunction, Request, Response } from 'express';
import statusPack from '../Utils/httpStatuses';

const { BAD_REQUEST_STATUS: badReq, UNPROCESSABLE_ENTITY: unpEntity } = statusPack;

const newProductValidation = (req: Request, res: Response, next: NextFunction) => {
  const { body: { name, amount } } = req;
  if (!name) return res.status(badReq).json({ message: '"name" is required' });
  if (!amount) return res.status(badReq).json({ message: '"amount" is required' });
  req.body.product = { name, amount };
  next();
};

const newProductValueCheck = (req: Request, res: Response, next: NextFunction) => {
  const { product: { name, amount } } = req.body;
  if (typeof name !== 'string') {
    return res.status(unpEntity).json({ message: '"name" must be a string' });
  }
  if (typeof amount !== 'string') {
    return res.status(unpEntity).json({ message: '"amount" must be a string' });
  }
  if (name.length < 3) {
    return res.status(unpEntity)
      .json({ message: '"name" length must be at least 3 characters long' });
  }
  if (amount.length < 3) {
    return res.status(unpEntity)
      .json({ message: '"amount" length must be at least 3 characters long' });
  }
  next();
};

export = {
  newProductValidation,
  newProductValueCheck,
};