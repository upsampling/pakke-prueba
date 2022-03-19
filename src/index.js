require('dotenv').config();

const { PORT = 3000 } = process.env;

const express = require('express');
const router = require('./routers');

const app = express();

app.use(router);

const server = app.listen(PORT, () => {
  console.log('[INFO][SERVER]:listening on port ', PORT);
});