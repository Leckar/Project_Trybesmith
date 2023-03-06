import { Request, Response } from 'express';
import productService from '../services/product.service';
import statusPack from '../Utils/httpStatuses';

const { CREATED_STATUS, OK_STATUS } = statusPack;

const create = async (req: Request, res: Response) => {
  const { body: { name, amount } } = req;
  const newProduct = await productService.create({ name, amount });
  res.status(CREATED_STATUS).json(newProduct);
};

const getAll = async (_req: Request, res: Response) => {
  const productsList = await productService.findAll();
  res.status(OK_STATUS).json(productsList);
};

export = {
  create,
  getAll,
};