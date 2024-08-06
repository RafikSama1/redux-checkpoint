
const { Router } = require('express');
const authController = require('../controllers/auth.controller');
const errorHandler = require('../middlewares/errorHandler');
const validator = require('../middlewares/validator.middleware');
const authValidation = require('../validation/auth.validation');

const router = Router();

router.post('/login', validator(authValidation.login), errorHandler(authController.login));

module.exports = router;