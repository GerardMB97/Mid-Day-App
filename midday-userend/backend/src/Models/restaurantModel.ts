const { model, Schema } = require('mongoose');

const RestaurantSchema = new Schema({
  name: String,
  image: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  menuPrice: Number,
  phone: Number,
  street: String,
  capacity: Number,
  city: String,
  address: String,
  zip: String,
  bookings: Array
});

module.exports = model('Restaurant', RestaurantSchema);
