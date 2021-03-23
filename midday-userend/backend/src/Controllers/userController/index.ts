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

      const updatedUser = await User.findByIdAndUpdate(userId, { bookings: [...user.bookings, bookingId] }, { new: true })
        .populate(['bookings', 'invitations'])
        .populate({ path: 'invitations', populate: [{ path: 'bookingAdmin' }, { path: 'restaurant' }, { path: 'people', populate: { path: 'user' } }] })
        .populate({ path: 'bookings', populate: [{ path: 'bookingAdmin' }, { path: 'restaurant' }, { path: 'people', populate: { path: 'user' } }] }); ;

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
      const user = await User.findOne({ email })
        .populate(['bookings', 'invitations'])
        .populate({ path: 'invitations', populate: [{ path: 'bookingAdmin' }, { path: 'restaurant' }, { path: 'people', populate: { path: 'user' } }] })
        .populate({ path: 'bookings', populate: [{ path: 'bookingAdmin' }, { path: 'restaurant' }, { path: 'people', populate: { path: 'user' } }] });
      if (user === null) {
        res.status(404);
        res.json({ data: { _id: null } });
      } else {
        res.json(user);
        res.status(200);
      }
    } catch {
      res.status(500);
      res.send("This user doesn't exist");
    }
  };

  const addInvitation = async (req:Request, res:Response) => {
    const { userId, bookingId } = req.body;
    console.log('assaasass', bookingId);

    try {
      const invitedUser = await User.findById(userId);
      const updatedUser = await User.findByIdAndUpdate(userId, { invitations: [...invitedUser.invitations, bookingId] }, { new: true })
        .populate(['bookings', 'invitations'])
        .populate({ path: 'invitations', populate: [{ path: 'bookingAdmin' }, { path: 'restaurant' }, { path: 'people', populate: { path: 'user' } }] })
        .populate({ path: 'bookings', populate: [{ path: 'bookingAdmin' }, { path: 'restaurant' }, { path: 'people', populate: { path: 'user' } }] }); ;
      res.status(200);
      res.json(updatedUser);
    } catch (error) {
      res.status(500);
      res.send('There was an error sending your invitation');
    }
  };

  const deleteInvitation = async (req:Request, res:Response) => {
    try {
      const { userId, invitationId } = req.body;
      const updatedUser = await User.findByIdAndUpdate(userId, { $pull: { invitations: invitationId } }, { new: true })
        .populate(['bookings', 'invitations'])
        .populate({ path: 'invitations', populate: [{ path: 'bookingAdmin' }, { path: 'restaurant' }, { path: 'people', populate: { path: 'user' } }] })
        .populate({ path: 'bookings', populate: [{ path: 'bookingAdmin' }, { path: 'restaurant' }, { path: 'people', populate: { path: 'user' } }] }); ;
      res.json(updatedUser);
      res.status(200);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  return {
    updateAllergies,
    updateisNew,
    addBookingToUser,
    findUser,
    addInvitation,
    deleteInvitation
  };
};
module.exports = userController();
