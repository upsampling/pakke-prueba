const { Router } = require('express');

const { MiddlewareAuth } = require('./commons/middleware/auth');

const imageRouter = require('./features/Image/routers/router');
const objectRouter = require('./features/Object/routers/router');

const router = Router();
router.get('/alive', (req, res) => {
  return res.status(200).send('pong');
});

router.use('/image', MiddlewareAuth, imageRouter);
router.use('/object', objectRouter);

router.use('*', function (req, res) {
  res.status(404).send('DOES N0T EXIST THIS URL');
});

module.exports = router;
