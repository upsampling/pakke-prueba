const { Router } = require('express');

const router = Router();

// const { MiddlewareAuth } = require('../../../commons/middleware/auth');
const { TransformImage } = require('../controllers/TransformImage');

router.post('/transform', TransformImage);

module.exports = router;

