import { ResultSetHeader } from 'mysql2';
import { Pool } from 'mysql2/promise';
import connection from './connection';
import { InterProducts, User } from '../interface';

export default class ProductsModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<InterProducts[]> {
    const [conn] = await this.connection.execute('SELECT * FROM Trybesmith.products');
    return conn as InterProducts[];
  }

  public async create(products: User): Promise<number> {
    const { name, amount } = products;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return insertId;
  }
}

// export const getOrdersModel = async () => {
//   const [conn] = await connection.execute(`SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) 
//   AS productsIds FROM Trybesmith.orders AS o
//   INNER JOIN Trybesmith.products AS p ON o.id = p.order_id GROUP BY o.id;`);

//   return conn;
// };