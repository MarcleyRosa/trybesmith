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
