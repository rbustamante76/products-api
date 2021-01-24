const Joi = require('@hapi/joi');

exports.validateQuery = query => {
  const schema = Joi.object({
    description: Joi.string().required(),
  });

  return schema.validate(query);
};