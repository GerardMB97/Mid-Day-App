import { Request, Response } from 'express';
export {};
const Booking = require('../../Models/bookingModel');
const User = require('../../Models/userModel');
const userController = require('../userController');
const bookingController = () => {
  const createNewBooking = async (req:Request, res:Response) => {
    const newBooking = new Booking(req.body);
    try {
      newBooking.save();
      res.status(200);
      res.json(newBooking);
    } catch (error) {
      res.status(500);
      res.send('There was an error saving yout booking');
    }
  };
  const deleteBooking = async (req:Request, res:Response) => {
    const { bookingId } = req.body;
    try {
      await Booking.findByIdAndDelete(bookingId);
      const user = await userController.findUser(req, res);
      res.json(user);
      res.send(200);
    } catch (error) {
      res.send('Your booking could not be deleted correctly');
      res.status(500);
    }
  };
  return {
    createNewBooking,
    deleteBooking
  };
};

module.exports = bookingController();
