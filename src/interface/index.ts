export type User = {
  id?: number;
  name: string;
  amount: string;
};

export type NewUser = {
  username: string;
  vocation: string;
  level: number;
  password: string;
};

export type ConfigJwt = {
  expiresIn: string,
  algorithm: string,
};