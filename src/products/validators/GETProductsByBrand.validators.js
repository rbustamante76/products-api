const Joi = require('@hapi/joi');

exports.validateQuery = query => {
  const schema = Joi.object({
    brand: Joi.string().required(),
  });

  return schema.validate(query);
};