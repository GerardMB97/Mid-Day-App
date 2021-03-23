import { Request, Response } from 'express';
const md5 = require('md5');
const User = require('../../Models/userModel');

async function register (req:Request, res: Response) {
  const { email, password, name } = req.body;

  const isRegistered = await User.findOne({ email })
    .populate(['bookings', 'invitations']);

  if (isRegistered) {
    res.send('409');
  } else {
    const user = new User({
      email,
      password: md5(password),
      name,
      isNewUser: true
    });
    try {
      user.save();
      req.login(user, () => { res.json(user); });
    } catch {
      res.status(500);
      res.send('error');
    }
  }
}

async function login (req: Request, res: Response) {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email })
      .populate(['bookings', 'invitations'])
      .populate({ path: 'invitations', populate: [{ path: 'bookingAdmin' }, { path: 'people', populate: { path: 'user' } }] })
      .populate({ path: 'bookings', populate: [{ path: 'bookingAdmin' }, { path: 'people', populate: { path: 'user' } }] });
    res.json(user);
  } catch (error) {
    res.status(500);
  }
}

function logout (req: Request, res: Response) {
  req.logout();
  res.send('You logged out correctly');
}

function test (req: Request, res: Response) {
  if (req.isAuthenticated()) {
    res.send('estas logeado');
  } else {
    res.send('no estas logueado');
  }
}

module.exports = { register, login, logout, test };
