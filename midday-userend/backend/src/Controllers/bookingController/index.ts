import { Request, Response } from 'express';
export {};
const Booking = require('../../Models/bookingModel');

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
  return {
    createNewBooking
  };
};

module.exports = bookingController();
