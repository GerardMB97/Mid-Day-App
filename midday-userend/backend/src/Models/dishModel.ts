export {};
const { model, Schema } = require('mongoose');

const DishSchema = new Schema({
  type: String,
  name: String,
  extra: Number,
  ingredients: [String]
});
module.exports = model('Dish', DishSchema);
