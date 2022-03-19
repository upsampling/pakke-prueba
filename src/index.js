require('dotenv').config();

const { PORT } = process.env;

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const router = require('./routers');
const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(router);

app.listen(PORT, () => {
  console.log('[INFO][SERVER]:listening on port ', PORT);
});