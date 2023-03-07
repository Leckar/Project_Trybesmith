import { NextFunction, Request, Response } from 'express';
import statusPack from '../Utils/httpStatuses';
import Schema from '../Utils/productIdSchema';

const { BAD_REQUEST_STATUS: badReq, UNPROCESSABLE_ENTITY: unpEntity } = statusPack;

const productIdValidation = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  const { error } = Schema.validate(productsIds);
  if (!productsIds) return res.status(badReq).json({ message: '"productsIds" is required' });
  if (error) {
    return res.status(unpEntity).json({ message: '"productsIds" must be an array' });
  }
  if (productsIds.length < 1) {
    return res.status(unpEntity).json({ message: '"productsIds" must include only numbers' });
  }
  next();
};

export = productIdValidation;