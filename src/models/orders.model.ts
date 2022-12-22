import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Pedido, ProdIds } from '../interface';
import connection from './connection';

export default class OrdersModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAllIds(): Promise<ProdIds[]> {
    const [conn] = await this.connection.execute(`SELECT o.id, o.user_id AS userId,
    JSON_ARRAYAGG(p.id) AS productsIds FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS p ON o.id = p.order_id GROUP BY o.id;`);

    return conn as ProdIds[];
  }

  public async create(order: Pedido): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders () VALUES (?)',
      [order],
    );

    return insertId;
  }
}