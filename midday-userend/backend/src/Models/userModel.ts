import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  email: String,
  password: String,
  name: String,
  allergies: [String]
});

module.exports = model('User', UserSchema);
