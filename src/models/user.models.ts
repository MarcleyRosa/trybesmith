import { Pool, ResultSetHeader } from 'mysql2/promise';
import { NewUser, ReturnToken, UserId } from '../interface';
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

  public async getById(user: ReturnToken) {
    const { username } = user;
    const [findUser] = await this.connection
      .execute('SELECT id FROM Trybesmith.users WHERE username = ?', [username]);
    return findUser as UserId[];
  }
}
