// import { ResultSetHeader } from 'mysql2';
import { Pool } from 'mysql2/promise';
import connection from './connection';
import { InterProducts } from '../interface';

export default class ProductsModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<InterProducts[]> {
    const [conn] = await this.connection.execute('SELECT * FROM Trybesmith.products');
    return conn as InterProducts[];
  }
}

// export const getAllProductsModel = async () => {
//   const [conn] = await connection.execute('SELECT * FROM Trybesmith.products');

//   return conn;
// };

// export const postProductModel = async (products: User): Promise<number> => {
//   const { name, amount } = products;
//   const [{ insertId }] = await connection
//     .execute<ResultSetHeader>(
//     'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
//     [name, amount],
//   );

//   return insertId;
// };

// export const postUserModel = async (newUser: NewUser): Promise<number> => {
//   const { username, vocation, level, password } = newUser;
//   const [{ insertId }] = await connection
//     .execute<ResultSetHeader>(
//     'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
//     [username, vocation, level, password],
//   );

//   return insertId;
// };

// export const getOrdersModel = async () => {
//   const [conn] = await connection.execute(`SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) 
//   AS productsIds FROM Trybesmith.orders AS o
//   INNER JOIN Trybesmith.products AS p ON o.id = p.order_id GROUP BY o.id;`);

//   return conn;
// };