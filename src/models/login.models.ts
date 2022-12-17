import { Pool, RowDataPacket } from 'mysql2/promise';
import { NewUser, UserLogin } from '../interface';
import connection from './connection';

export default class LoginModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getByUser(user: UserLogin): Promise<NewUser[]> {
    const { username, password } = user;
    const [findUser] = await this.connection.execute<RowDataPacket[]>(`
    SELECT id, username, vocation, level FROM Trybesmith.users
    WHERE username = ? AND password = ?;`, [username, password]);
    return findUser as NewUser[];
  }
}
