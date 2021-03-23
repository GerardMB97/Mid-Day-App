import { Router } from 'express';
export {};
const bookingController = require('../Controllers/bookingController');

const bookingRouter = ():Router => {
  const router = Router();

  router
    .route('/new')
    .post(bookingController.createNewBooking)
    .put(bookingController.updateBooking);
  router
    .route('/delete/:email')
    .put(bookingController.deleteBooking);
  router
    .route('/')
    .put(bookingController.updateSelection);

  return router;
};

module.exports = bookingRouter();
