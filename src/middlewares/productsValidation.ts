import { NextFunction, Request, Response } from 'express';
import statusPack from '../Utils/httpStatuses';

const { BAD_REQUEST_STATUS: badReq } = statusPack;

const newProductValidation = (req: Request, res: Response, next: NextFunction) => {
  const { body: { name, amount } } = req;
  if (!name) return res.status(badReq).json({ message: '"name" is required' });
  if (!amount) return res.status(badReq).json({ message: '"amount" is required' });
  req.body.product = { name, amount };
  next();
};

export = {
  newProductValidation,
};