import { Request, Response } from 'express';
export {};
const Category = require('../Models/categoryModel');

const restaurantController = () => {
  const getRestaurants = async (req: Request, res: Response) => {
    try {
      const restaurants = await Category.find({});
      res.json(restaurants);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };
  const createCategory = (req: Request, res:Response) => {
    const newCategory = new Category(req.body);
    newCategory.save();
    res.json(newCategory);
  };

  return {
    getRestaurants,
    createCategory
  };
};

module.exports = restaurantController();
