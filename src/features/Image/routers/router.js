const { Router } = require('express');

const router = Router();
const { TransformImage } = require('../controllers/TransformImage');

router.post('/transform', TransformImage);

module.exports = router;
