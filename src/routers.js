const { Router } = require('express');

const imageRouter = require('./features/Image/routers/router');

const router = Router();
router.use('/image', coinsRouter);
router.use('/object', notesRouter);