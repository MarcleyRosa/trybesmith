import Joi from 'joi';

export const isName = Joi.string().required();
export const isPassword = Joi.string().required();

export const userLogin = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});