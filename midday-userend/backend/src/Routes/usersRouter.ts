import { Router } from 'express';
export {};
const usersController = require('../Controllers/usersController');

const usersRouter = ():Router => {
  const router = Router();

  router
    .route('/allergies/add')
    .put(usersController.addAllergy);

  router
    .route('/allergies/add')
    .put(usersController.removeAllergy);

  return router;
};

module.exports = usersRouter();
