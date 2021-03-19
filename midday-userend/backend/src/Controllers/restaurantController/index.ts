import { Request, Response } from 'express';
export {};
const Category = require('../../Models/categoryModel');
const Restaurant = require('../../Models/restaurantModel');
require('../../Models/menuModel');
require('../../Models/dishModel');

const restaurantController = () => {
  const getCategories = async (req: Request, res: Response) => {
    try {
      const categories = await Category.find({});
      res.json(categories);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const getRestaurants = async (req: Request, res: Response) => {
    try {
      const restaurants = await Restaurant.find({})
        .populate('category')
        .populate('menus')
        .populate({
          path: 'menus',
          populate: [{ path: 'firstCourse' }, { path: 'secondCourse' }, { path: 'dessert' }]
        });

      res.json(restaurants);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  return {
    getCategories,
    getRestaurants

  };
};

module.exports = restaurantController();
