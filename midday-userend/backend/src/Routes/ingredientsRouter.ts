import { Router } from 'express';
export {};
const ingredientController = require('../Controllers/ingredientController');

const ingredientsRouter = ():Router => {
  const router = Router();

  router
    .route('/new/:_id')
    .get(ingredientController.getIngredients);

  return router;
};

module.exports = ingredientsRouter();
