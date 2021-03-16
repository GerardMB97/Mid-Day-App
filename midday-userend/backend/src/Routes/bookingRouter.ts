import { Router } from 'express';
export {};
const bookingController = require('../Controllers/bookingController');

const bookingRouter = ():Router => {
  const router = Router();

  router
    .route('/new/:_id')
    .put(bookingController.createBooking);

  return router;
};

module.exports = bookingRouter();
