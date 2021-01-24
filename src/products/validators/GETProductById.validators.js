const Joi = require('@hapi/joi');

exports.validateQuery = query => {
  const schema = Joi.object({
    id: Joi.number().required(),
  });

  return schema.validate(query);
};
