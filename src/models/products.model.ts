import {
  ResultSetHeader,
  RowDataPacket,
} from 'mysql2';
import {
  NewProduct,
  Product,
} from '../types';
import connection from './connection';

const create = async (product: NewProduct): Promise<Product> => {
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [product.name, product.amount],
  );
  return { id: insertId, ...product } as Product;
};

const findAll = async (): Promise<Product[]> => {
  const [rows] = await connection
    .execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return rows as Product[];
};

export = {
  create,
  findAll,
};