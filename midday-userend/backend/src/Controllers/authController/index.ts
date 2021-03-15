import { Request, Response } from 'express';
const md5 = require('md5');
const User = require('../../Models/userModel');

async function register (req: Request, res: Response) {
  const { email, password } = req.body;

  const isRegistered = await User.findOne({ email });

  if (isRegistered) {
    res.send('This user is already registered');
  } else {
    const user = new User({
      email,
      password: md5(password)
    });
    console.log(user);
    try {
      user.save();
      req.login(user, () => { res.json(user); });
    } catch {
      res.status(500);
      res.send('error');
    }
  }
}

function login (req: Request, res: Response) {
  res.redirect('/api/midday/restaurants/categories');
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
