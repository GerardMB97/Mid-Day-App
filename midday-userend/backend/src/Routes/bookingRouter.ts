import { Router } from 'express';
export {};
const bookingController = require('../Controllers/bookingController');

const bookingRouter = ():Router => {
  const router = Router();

  router
    .route('/new')
    .post(bookingController.createNewBooking);
  router
    .route('/delete/:email')
    .put(bookingController.deleteBooking);

  return router;
};

module.exports = bookingRouter();
