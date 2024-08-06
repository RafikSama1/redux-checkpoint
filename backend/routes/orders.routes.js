
const { Router } = require('express');
const ordersController = require('../controllers/order.controller');
const errorHandler = require('../middlewares/errorHandler');
const objectIdMiddleware = require('../middlewares/objectId.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/orders', authMiddleware, errorHandler(ordersController.index));
router.post('/orders', errorHandler(ordersController.store));
router.get('/orders/:id', authMiddleware, objectIdMiddleware, errorHandler(ordersController.show));
router.put('/orders/:id', authMiddleware, objectIdMiddleware,  errorHandler(ordersController.update));
router.delete('/orders/:id', authMiddleware, objectIdMiddleware, errorHandler(ordersController.delete));

module.exports = router;