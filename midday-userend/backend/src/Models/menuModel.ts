export {};
const { model, Schema } = require('mongoose');

const MenuSchema = new Schema({
  firstCourse: [{ type: Schema.Types.ObjectId, ref: 'Dish' }],
  secondCourse: [{ type: Schema.Types.ObjectId, ref: 'Dish' }],
  dessert: [{ type: Schema.Types.ObjectId, ref: 'Dish' }],
  price: Number,
  date: Date
});
module.exports = model('Menu', MenuSchema);
