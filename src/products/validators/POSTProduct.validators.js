const Joi = require('@hapi/joi');

exports.validateQuery = query => {
  const schema = Joi.object({
   id: Joi.number().required(),
    brand: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().optional(),
    price: Joi.number().required()
  });

  return schema.validate(query);
};