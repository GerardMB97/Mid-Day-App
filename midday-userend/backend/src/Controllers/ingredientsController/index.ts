import { Request, Response } from 'express';
export {};
const Ingredient = require('../../Models/ingredientModel');

interface IngredientInterface {
  category: string,
  ingredient: object[]
}

const ingredientsController = () => {
  const getIngredients = async (req:Request, res:Response) => {
    try {
      const ingredients = await Ingredient.find({});
      const allergiesList = ingredients.map((ingredient:IngredientInterface) => ingredient.category);
      console.log(allergiesList);
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
