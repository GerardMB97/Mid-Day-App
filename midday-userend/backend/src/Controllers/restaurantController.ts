import Restaurant from '../Models/restaurantModel';
import { Request, Response } from 'express';
import '../Models/categoryModel';

const restaurantController = () => {
  const getRestaurants = async (req:Request, res: Response) => {
    try {
      const restaurants = await Restaurant.find({});
      res.json(restaurants);
    } catch (error) {
      res.status(500);
      res.send('There was an error fetching the restaurants');
    }
  };

  return {
    getRestaurants
  };
};

module.exports = restaurantController();
