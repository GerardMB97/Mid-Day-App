import { Router } from 'express';
export {};
const userController = require('../Controllers/userController');

const usersRouter = ():Router => {
  const router = Router();

  router
    .route('/allergies')
    .put(userController.updateAllergies);

  router
    .route('/isNew')
    .put(userController.updateisNew);

  return router;
};

module.exports = usersRouter();
