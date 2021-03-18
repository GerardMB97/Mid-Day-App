import { Router } from 'express';
export {};
const userController = require('../Controllers/userController');

const usersRouter = ():Router => {
  const router = Router();

  router
    .route('/allergies/add')
    .put(userController.addAllergy);

  return router;
};

module.exports = usersRouter();
