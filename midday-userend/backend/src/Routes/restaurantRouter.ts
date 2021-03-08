import { Router } from 'express';
export {};
const restaurantController = require('../Controllers/restaurantController');

const restaurantRouter = ():Router => {
  const router = Router();

  router
    .route('/restaurants/categories')
    .get(restaurantController.getRestaurants)
    .post(restaurantController.createCategory);

  return router;
};

module.exports = restaurantRouter();
