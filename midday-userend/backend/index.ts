const { connect } = require('mongoose');
const express = require('express');
const chalk = require('chalk');
const debug = require('debug');
const morgan = require('morgan');
require('dotenv').config();
const restaurantRouter = require('./src/Routes/restaurantRouter');

const Debug = debug('app');

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/midday', restaurantRouter);

connect(process.env.CLUSTERURL!, { useUnifiedTopology: true, useNewUrlParser: true });

app.listen(port, () => Debug(`Server running in port ${chalk.blue(`${port}`)}`));
