const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.json());

app.listen(port, () => debug(`Server running in port ${chalk.blue(`${port}`)}`));
