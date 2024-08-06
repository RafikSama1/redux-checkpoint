const Joi = require('joi');

exports.store = {
    name: Joi.string().required(),
    type: Joi.string().valid('Indoor', 'Outdoor').required(),
    age: Joi.number().positive(),
    price: Joi.number().positive().required(),
    description: Joi.string(),
};
