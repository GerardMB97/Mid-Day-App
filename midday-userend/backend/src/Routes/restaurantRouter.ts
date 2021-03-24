import { Router } from 'express';
export {};
const restaurantController = require('../Controllers/restaurantController');

const restaurantRouter = ():Router => {
  const router = Router();

  router
    .route('/restaurants')
    .get(restaurantController.getRestaurants)
    .put(restaurantController.addBookingToRestaurant);

  router
    .route('/restaurants/categories')
    .get(restaurantController.getCategories);

  return router;
};

module.exports = restaurantRouter();
