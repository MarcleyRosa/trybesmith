import { ResultSetHeader } from 'mysql2';
import { User } from '../interface';
import connection from './connection';

export const getAllProductsModel = async () => {
  const [conn] = await connection.execute('SELECT * FROM Trybesmith.products');

  console.log(conn);
  return conn;
};

export const postProductModel = async (products: User): Promise<number> => {
  const { name, amount } = products;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  console.log(insertId);
  return insertId;
};