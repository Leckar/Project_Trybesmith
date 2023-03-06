import { Request, Response } from 'express';
import productService from '../services/product.service';
import statusPack from '../Utils/httpStatuses';

const { CREATED_STATUS } = statusPack;

const create = async (req: Request, res: Response) => {
  const { body: { name, amount } } = req;
  const newProduct = await productService.create({ name, amount });
  res.status(CREATED_STATUS).json(newProduct);
};

export = {
  create,
};