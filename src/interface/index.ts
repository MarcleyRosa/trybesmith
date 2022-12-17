export interface User {
  id?: number;
  name: string;
  amount: string;
}

export interface NewUser {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password?: string;
}

export interface ConfigJwt {
  expiresIn: string;
  algorithm: string;
}

export interface InterProducts {

  id: number;
  name: string;
  amount: string;
  orderId?: number;

}

export interface ProdIds {
  id: number;
  userId: number;
  productsIds: number[];
}

export interface UserLogin {
  username: string;
  password: string;
}