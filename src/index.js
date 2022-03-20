require('dotenv').config();

const PORT = process.env.PORT || 4000;

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const { bodyValidate } = require('./commons/utils/bodyValidate');
const router = require('./routers');
const app = express();

app.use(helmet());
app.use(express.json(bodyValidate));
app.use(morgan('combined'));
app.use(router);

app.listen(PORT, () => {
  console.log('[INFO][SERVER]:listening on port ', PORT);
});
