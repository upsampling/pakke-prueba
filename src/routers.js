const { Router } = require('express');

const imageRouter = require('./features/Image/routers/router');
const objectRouter = require('./features/Object/routers/router');

const router = Router();
// router.use('/image', imageRouter);
router.use('/object', objectRouter);

module.exports = router;