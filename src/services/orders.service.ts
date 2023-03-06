import ordersModel from '../models/orders.model';
import { Order } from '../types';

const findAllAndJoin = async (): Promise<Order[]> => {
  const request = await ordersModel.findAllAndJoin();
  return request as Order[];
};

export = {
  findAllAndJoin,
};