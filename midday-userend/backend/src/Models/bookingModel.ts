export {};
const { model, Schema } = require('mongoose');

const BookingSchema = new Schema({
  date: String,
  hour: String,
  bookingAdmin: { type: Schema.Types.ObjectId, ref: 'User' },
  pax: Number,
  people: [Object]
});
module.exports = model('Booking', BookingSchema);
