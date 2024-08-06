const Joi = require('joi');

exports.login = {
    email: Joi.string().email().required(),
    password: Joi.string().required()
};
