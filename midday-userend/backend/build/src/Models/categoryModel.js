'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const mongoose1 = require('mongoose');
const CategorySchema = new mongoose1.Schema({
  name: String,
  image: String
});
exports.default = mongoose1.model('Category', CategorySchema);
