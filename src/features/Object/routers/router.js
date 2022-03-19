const { Router } = require('express');

const router = Router();

router.get('/clean', GetCoins);

module.exports = router;

