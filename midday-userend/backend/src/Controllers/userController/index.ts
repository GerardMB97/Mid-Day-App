import { Request, Response } from 'express';
const User = require('../../Models/userModel');

const userController = () => {
  const updateAllergies = async (req:Request, res:Response) => {
    try {
      const { _id } = req.body;
      const { allergies } = req.body;

      const updatedUser = await User.findByIdAndUpdate(_id, { allergies }, { new: true });

      res.status(200);
      res.json(updatedUser);
    } catch (error) {
      res.status(500);
      res.send('There was an error saving your allergy');
    }
  };

  return {
    updateAllergies
  };
};

module.exports = userController();
