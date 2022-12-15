import jwt from 'jsonwebtoken';
import { ConfigJwt, NewUser } from '../interface';

const secret = process.env.JWT_SECRET || 'secretJWT';

const jwtConfig: ConfigJwt = {
  expiresIn: '1d',
  algorithm: 'HS256',
}; 
console.log(jwtConfig);

export const tokenUser = (newUser: NewUser) => {
  const token = jwt.sign(newUser, secret, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

export const verifyToken = (token: string) => {
  const decod = jwt.verify(token, secret);
  return decod;
};