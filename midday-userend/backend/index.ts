import { connect } from 'mongoose';
import express from 'express';
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';
import dotenv from 'dotenv';
const restaurantRouter = require('./src/Routes/restaurantRouter');

dotenv.config();
const Debug = debug('app');

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/midday', restaurantRouter);

connect(process.env.APIURL!, { useUnifiedTopology: true, useNewUrlParser: true });

app.listen(port, () => Debug(`Server running in port ${chalk.blue(`${port}`)}`));
