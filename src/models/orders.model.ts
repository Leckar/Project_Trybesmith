import {
  ResultSetHeader,
  RowDataPacket,
} from 'mysql2';
import { NewOrder, Order } from '../types';
import connection from './connection';

const create = async (orderData: NewOrder): Promise<Order> => {
  const { userId, productsIds } = orderData;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [userId],
  );
  Promise.all(productsIds.map(async (id: number) => {
    await connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
      [insertId, id],
    );
  }));
  return { id: insertId, userId, productsIds } as Order;
};

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
  create,
  findAllAndJoin,
};