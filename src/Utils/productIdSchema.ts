import Joi from 'joi';

const productsIdsSchema = Joi.array().items(
  Joi.number(),
).required();

export = productsIdsSchema;