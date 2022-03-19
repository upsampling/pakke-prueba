const { Router } = require('express');

const router = Router();
const { CleanObject } = require('../controllers/CleanObject');
router.get('/clean', CleanObject);

module.exports = router;

