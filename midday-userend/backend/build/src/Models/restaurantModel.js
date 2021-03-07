'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const mongoose1 = require('mongoose');
const RestaurantSchema = new mongoose1.Schema({
  name: String,
  image: String,
  category: { type: mongoose1.Schema.Types.ObjectId, ref: 'Category' },
  capacity: Number,
  phone: Number,
  address: String
});
exports.default = mongoose1.model('Restaurant', RestaurantSchema);
