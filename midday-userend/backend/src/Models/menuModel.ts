export {};
const { model, Schema } = require('mongoose');

const MenuSchema = new Schema({
  firstCourse: [{ type: Schema.Types.ObjectId, ref: 'Dish' }]
});
module.exports = model('Menu', MenuSchema);
