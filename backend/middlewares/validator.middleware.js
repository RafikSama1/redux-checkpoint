const Joi = require('joi');

const options = {
    abortEarly: false,
    errors: {
      wrap: {
        label: ''
      }
    }
  };

module.exports = (schema) => (req, res, next) => {
    const result = Joi.object(schema).validate(req.body, options);

    if (result.error) {
        const errors = result.error.details.map(detail => {
            return {
                key: detail.context.key,
                message: detail.message
            }
        });
        return res.status(422).json(errors);
    }
    else {
        next();
    }
}
