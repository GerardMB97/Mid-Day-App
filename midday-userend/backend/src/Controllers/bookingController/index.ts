import { Request, Response } from 'express';
export {};
const Restaurant = require('../../Models/restaurantModel');

const bookingController = () => {
  const createBooking = async (req:Request, res:Response) => {
    const { _id } = req.params;
    try {
      const restaurant = await Restaurant.findById(_id);
      const updatedRestaurant = await Restaurant.findByIdAndUpdate(_id, { bookings: [...restaurant.bookings, req.body] }, { new: true });
      console.log(updatedRestaurant);
      res.json(updatedRestaurant);
    } catch (error) {
      res.status(500);
      res.send('There was an error creating your booking');
    }
  };
  return {
    createBooking
  };
};

module.exports = bookingController();
