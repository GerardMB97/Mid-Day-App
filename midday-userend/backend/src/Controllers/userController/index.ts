import { Request, Response } from 'express';
const User = require('../../Models/userModel');

const userController = () => {
  const updateAllergies = async (req:Request, res:Response) => {
    try {
      const { _id, allergies } = req.body;
      const updatedUser = await User.findByIdAndUpdate(_id, { allergies }, { new: true });

      res.status(200);
      res.json(updatedUser);
    } catch (error) {
      res.status(500);
      res.send('There was an error saving your allergy');
    }
  };
  const updateisNew = async (req:Request, res:Response) => {
    try {
      const { _id } = req.body;
      const updatedUser = await User.findByIdAndUpdate(_id, { isNewUser: false }, { new: true });
      res.json(updatedUser);
    } catch (error) {
      res.send('There was an error updating the user');
      res.status(500);
    }
  };

  const addBookingToUser = async (req:Request, res:Response) => {
    const { userId, bookingId } = req.body;
    try {
      const user = await User.findById(userId);

      const updatedUser = await User.findByIdAndUpdate(userId, { bookings: [...user.bookings, bookingId] }, { new: true });

      res.json(updatedUser);
      res.status(200);
    } catch (error) {
      res.status(500);
      res.send('There was an error trying to save your booking into the restaurant');
    }
  };

  const findUser = async (req:Request, res:Response) => {
    const { email } = req.params;

    try {
      const user = await User.find({ email });
      res.json(user);
      res.status(200);
    } catch {
      res.status(500);
      res.send("This user doesn't exist");
    }
  };

  return {
    updateAllergies,
    updateisNew,
    addBookingToUser
  };
};
module.exports = userController();
