import { Router } from 'express';

const restaurantRouter = ():Router => {
  const router = Router();

  router
    .route('/restaurants')
    .get();

  return router;
};

export default restaurantRouter();
