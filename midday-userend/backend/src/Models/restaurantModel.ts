const { model, Schema } = require('mongoose');

const RestaurantSchema = new Schema({
  name: String,
  image: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  menuPrice: Number,
  menus: [{ type: Schema.Types.ObjectId, ref: 'Menu' }],
  phone: Number,
  street: String,
  capacity: Number,
  city: String,
  address: String,
  zip: String,
  bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }]
});

module.exports = model('Restaurant', RestaurantSchema);
