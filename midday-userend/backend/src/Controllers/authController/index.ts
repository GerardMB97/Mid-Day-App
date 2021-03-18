import { Request, Response } from 'express';
const md5 = require('md5');
const User = require('../../Models/userModel');

async function register (req:Request, res: Response) {
  const { email, password, name } = req.body;

  const isRegistered = await User.findOne({ email });

  if (isRegistered) {
    res.send('409');
  } else {
    const user = new User({
      email,
      password: md5(password),
      name,
      isNew: true
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
  console.log(req.body);
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    console.log(user);
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
