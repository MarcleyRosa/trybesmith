import Joi from 'joi';

export const isLevel = Joi.number().required().min(1).messages({
  'number.base': '"level" must be a number',
  'any.required': '"level" is required',
  'number.min': '"level" must be greater than or equal to 1',
});

export const isPassword = Joi.string().required().min(8).messages({
  'string.base': '"password" must be a string',
  'any.required': '"password" is required',
  'string.min': '"password" length must be at least 8 characters long',
});

export const funcValidation = (prop: string) => Joi.string().required().min(3).messages({
  'string.base': `"${prop}" must be a string`,
  'any.required': `"${prop}" is required`,
  'string.min': `"${prop}" length must be at least 3 characters long`,
});

export const userLogin = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});