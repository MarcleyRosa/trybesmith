import { ResultSetHeader } from 'mysql2';
import { NewUser, User } from '../interface';
import connection from './connection';

export const getAllProductsModel = async () => {
  const [conn] = await connection.execute('SELECT * FROM Trybesmith.products');

  return conn;
};

export const postProductModel = async (products: User): Promise<number> => {
  const { name, amount } = products;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return insertId;
};

export const postUserModel = async (newUser: NewUser): Promise<number> => {
  const { username, vocation, level, password } = newUser;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );

  return insertId;
};