import Joi from 'joi';

export const isName = Joi.string().required().min(3).messages({
  'string.base': '"name" must be a string',
  'any.required': '"name" is required',
  'string.min': '"name" length must be at least 3 characters long',
});
export const isAmount = Joi.string().required().min(3).messages({
  'string.base': '"amount" must be a string',
  'any.required': '"amount" is required',
  'string.min': '"amount" length must be at least 3 characters long',
});

export const userLogin = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});