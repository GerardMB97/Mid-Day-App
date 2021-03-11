const { model, Schema } = require('mongoose');

const RestaurantSchema = new Schema({
  name: String,
  image: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  capacity: Number,
  phone: Number,
  address: String
});

module.exports = model('Restaurant', RestaurantSchema);
