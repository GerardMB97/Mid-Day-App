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

  const addBookingToRestaurant = async (req: Request, res: Response) => {
    const { restaurantId, bookingId } = req.body;
    try {
      const restaurant = await Restaurant.findById(restaurantId);
      const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId, { bookings: [...restaurant.bookings, bookingId] }, { new: true });

      res.json(updatedRestaurant);
      res.status(200);
    } catch (error) {
      res.status(500);
      res.send('There was an error trying to save your booking into the restaurant');
    }
  };

  return {
    getCategories,
    getRestaurants,
    addBookingToRestaurant

  };
};

module.exports = restaurantController();
