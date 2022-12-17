import { Pool, ResultSetHeader } from 'mysql2/promise';
import { NewUser } from '../interface';
import connection from './connection';

export default class UserModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async create(newUser: NewUser): Promise<number> {
    const { username, vocation, level, password } = newUser;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    
    return insertId;
  }
}
