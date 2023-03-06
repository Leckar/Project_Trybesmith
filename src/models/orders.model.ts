import {
  RowDataPacket,
} from 'mysql2';
import { Order } from '../types';
import connection from './connection';

const findAllAndJoin = async (): Promise<Order[]> => {
  const [rows] = await connection
    .execute<RowDataPacket[]>(
    `SELECT orders.id, orders.user_id AS userId, JSON_ARRAYAGG(products.id) AS productsIds
    FROM Trybesmith.orders AS orders
    INNER JOIN Trybesmith.products AS products
    ON orders.id = products.order_id GROUP BY orders.id;`,
  );
  return rows as Order[];
};

export = {
  findAllAndJoin,
};