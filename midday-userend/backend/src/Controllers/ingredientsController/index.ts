import { Request, Response } from 'express';
export {};
const Ingredient = require('../../Models/ingredientModel');

const ingredientsController = () => {
  const getIngredients = async (req:Request, res:Response) => {
    try {
      const ingredients = await Ingredient.find({});
      const allergiesList = ingredients.reduce((acc:any, iteration:any) => acc.concat(iteration.ingredient), []);
      res.json(allergiesList);
    } catch (error) {
      res.status(500);
      res.send('There was an error loading the ingredients');
    }
  };
  return {
    getIngredients
  };
};

module.exports = ingredientsController();
