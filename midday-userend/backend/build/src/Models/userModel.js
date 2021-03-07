'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const mongoose1 = require('mongoose');
const UserSchema = new mongoose1.Schema({
  email: String,
  password: String,
  name: String,
  allergies: [String]
});
module.exports = mongoose1.model('User', UserSchema);
