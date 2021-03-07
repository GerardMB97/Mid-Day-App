import { model, Schema } from 'mongoose';

const RestaurantSchema = new Schema({
  name: String,
  image: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  capacity: Number,
  phone: Number,
  address: String
});

export default model('Restaurant', RestaurantSchema);
