import {
  ResultSetHeader,
  // RowDataPacket,
} from 'mysql2';
import {
  NewUser, User,
} from '../types';
import connection from './connection';

const create = async (user: NewUser): Promise<User> => {
  const { username, vocation,
    level,
    password } = user;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return { id: insertId,
    username,
    vocation,
    level } as User;
};

// const findAll = async (): Promise<Product[]> => {
//   const [rows] = await connection
//     .execute<RowDataPacket[]>(
//     'SELECT * FROM Trybesmith.products',
//   );
//   return rows as Product[];
// };

export = {
  create,
  // findAll,
};