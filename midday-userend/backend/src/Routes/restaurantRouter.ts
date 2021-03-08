import { Router } from 'express';
export {};
const restaurantController = require('../Controllers/restaurantController');

const restaurantRouter = ():Router => {
  const router = Router();

  router
    .route('/restaurants')
    .get(restaurantController.getRestaurants);

  return router;
};

module.exports = restaurantRouter();
