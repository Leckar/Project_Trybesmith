import ordersModel from '../models/orders.model';
import { Order } from '../types';

const create = async (userId: number, productsIds: number[]): Promise<Order> => {
  const request = await ordersModel.create({ userId, productsIds });
  return request;
};

const findAllAndJoin = async (): Promise<Order[]> => {
  const request = await ordersModel.findAllAndJoin();
  return request as Order[];
};

export = {
  create,
  findAllAndJoin,
};