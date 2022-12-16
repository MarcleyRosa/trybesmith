export interface User {
  id?: number;
  name: string;
  amount: string;
}

export interface NewUser {
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface ConfigJwt {
  expiresIn: string,
  algorithm: string,
}

export interface InterProducts {

  id: number,
  name: string,
  amount: string;
  orderId?: number

}