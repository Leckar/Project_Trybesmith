import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import statusPack from '../Utils/httpStatuses';

const { CREATED_STATUS, OK_STATUS } = statusPack;

const getAll = async (_req: Request, res: Response) => {
  const ordersList = await ordersService.findAllAndJoin();
  res.status(OK_STATUS).json(ordersList);
};

const registerOrder = async (req: Request, res: Response) => {
  const { userId, productsIds } = req.body;
  const order = await ordersService.create(userId, productsIds);
  res.status(CREATED_STATUS).json(order);
};

export = {
  getAll,
  registerOrder,
};