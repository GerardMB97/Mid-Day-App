import { Router } from 'express';
import restaurantController from '../Controllers/restaurantController';

const restaurantRouter = ():Router => {
  const router = Router();

  router
    .route('/restaurants')
    .get(restaurantController.getRestaurants);

  return router;
};

module.exports = restaurantRouter();
