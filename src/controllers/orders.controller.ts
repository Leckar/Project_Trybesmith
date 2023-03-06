import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import statusPack from '../Utils/httpStatuses';

const { OK_STATUS } = statusPack;

const getAll = async (_req: Request, res: Response) => {
  const ordersList = await ordersService.findAllAndJoin();
  res.status(OK_STATUS).json(ordersList);
};

export = {
  getAll,
};