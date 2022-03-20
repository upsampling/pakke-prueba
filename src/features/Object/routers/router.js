const { Router } = require('express');

const { CleanObject } = require('../controllers/CleanObject');

const router = Router();

router.post('/clean', CleanObject);
// NEW FEATURES
// router.get('/clean', CleanObject);
// router.update('/clean', CleanObject);
// router.delete('/clean', CleanObject);

module.exports = router;
