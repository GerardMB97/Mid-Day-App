import { Request, Response } from 'express';
const User = require('../../Models/userModel');

const userController = () => {
  const addAllergy = async (req:Request, res:Response) => {
    try {
      const { _id } = req.body;
      const { allergy } = req.body;

      const user = await User.findById(_id);

      const updatedUser = await User.findByIdAndUpdate(_id, { allergies: [...user.allergies, allergy] }, { new: true });

      res.status(200);
      res.json(updatedUser);
    } catch (error) {
      res.status(500);
      res.send('There was an error saving your allergy');
    }
  };
  return {
    addAllergy
  };
};

module.exports = userController();
