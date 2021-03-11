import { Router } from 'express';
export {};
const restaurantController = require('../Controllers/restaurantController');

const restaurantRouter = ():Router => {
  const router = Router();

  router
    .route('/restaurants/categories/:category')
    .get(restaurantController.getRestaurants);

  router
    .route('/restaurants/categories')
    .get(restaurantController.getCategories);

  return router;
};

module.exports = restaurantRouter();
