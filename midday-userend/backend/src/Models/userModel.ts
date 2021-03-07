import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  email: String,
  password: String,
  name: String,
  allergies: [String]
});

export default model('User', UserSchema);
