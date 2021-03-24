const { connect } = require('mongoose');
const express = require('express');
const chalk = require('chalk');
const debug = require('debug');
const session = require('express-session');
const morgan = require('morgan');
require('dotenv').config();
const restaurantRouter = require('./src/Routes/restaurantRouter');
const authRouter = require('./src/Routes/authRouter');
const bookingRouter = require('./src/Routes/bookingRouter');
const ingredientsRouter = require('./src/Routes/ingredientsRouter');
const usersRouter = require('./src/Routes/usersRouter');

const Debug = debug('app');

const app = express();
const port = process.env.PORT || 6000;

app.use(morgan('dev'));
app.use(express.json());

app.use(session({ secret: 'skylab directory' }));

require('./src/Passport')(app);
app.use('/api/midday', restaurantRouter);
app.use('/api/midday/ingredients', ingredientsRouter);
app.use('/api/midday/auth', authRouter);
app.use('/api/midday/bookings', bookingRouter);
app.use('/api/midday/users', usersRouter);

connect(process.env.CLUSTERURL!, { useUnifiedTopology: true, useNewUrlParser: true });

app.listen(port, () => Debug(`Server running in port ${chalk.blue(`${port}`)}`));
