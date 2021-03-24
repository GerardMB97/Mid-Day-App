import { Request, Response } from 'express';
export {};
const Booking = require('../../Models/bookingModel');
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
  const updateBooking = async (req:Request, res:Response) => {
    try {
      const { userId, bookingId } = req.body;

      const updatedBooking = await Booking.findByIdAndUpdate(bookingId, { $inc: { pax: -1 }, $pull: { people: { user: userId } } }, { new: true });
      res.json(updatedBooking);
      res.status(200);
    } catch (error) {
      res.status(500);
      res.send('There was an error trying to update your booking');
    }
  };

  const updateSelection = async (req:Request, res:Response) => {
    try {
      const { userId, bookingId, selections } = req.body;
      const booking = await Booking.findById(bookingId);
      const updatedPeople = booking.people.map((person:any) => {
        return person.user.toString() === userId
          ? { ...person.toObject(), selections: selections }
          : person;
      });

      const updatedBooking = await Booking.findByIdAndUpdate(bookingId, { people: [...updatedPeople] });
      res.json(updatedBooking);
      res.status(200);
    } catch (error) {
      res.status(500);
      res.send('There was an error updating your booking');
    }
  };

  const getBooking = async (req:Request, res:Response) => {
    try {
      const { _id } = req.params;
      const booking = await Booking.findById(_id);
      res.json(booking);
      res.status(200);
    } catch (error) {
      res.status(500);
      res.send('There was an error trying to retrieve your booking');
    }
  };
  return {
    createNewBooking,
    deleteBooking,
    updateBooking,
    updateSelection,
    getBooking
  };
};

module.exports = bookingController();
