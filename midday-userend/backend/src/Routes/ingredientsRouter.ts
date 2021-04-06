import { Router } from 'express';
export {};
const ingredientController = require('../Controllers/ingredientsController');

const ingredientsRouter = ():Router => {
  const router = Router();

  router
    .route('/')
    .get(ingredientController.getIngredients);

  return router;
};

module.exports = ingredientsRouter();
