import { Router } from 'express';
export {};
const userController = require('../Controllers/userController');

const usersRouter = ():Router => {
  const router = Router();

  router
    .route('/')
    .put(userController.addBookingToUser);
  router
    .route('/deleteInvitation')
    .put(userController.deleteInvitation);
  router
    .route('/invitations')
    .put(userController.addInvitation);
  router
    .route('/:email')
    .get(userController.findUser);
  router
    .route('/allergies')
    .put(userController.updateAllergies);

  router
    .route('/isNewUser')
    .put(userController.updateisNew);

  return router;
};

module.exports = usersRouter();
