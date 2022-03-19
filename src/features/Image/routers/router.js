const { Router } = require('express');

const router = Router();

const { MiddlewareAuth } = require('../../../commons/middleware/auth');

router.get('/transform', MiddlewareAuthController, GetCoins);

module.exports = router;

