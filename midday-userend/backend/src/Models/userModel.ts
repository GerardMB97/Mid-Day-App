export {};
const { model, Schema } = require('mongoose');
const md5 = require('md5');

const UserSchema = new Schema({
  email: String,
  password: String,
  name: String,
  phone: Number,
  isNew: Boolean,
  allergies: [String],
  foodTastes: [String]
});

UserSchema.methods.validPassword = function validPassword (password: string) {
  return this.password === md5(password);
};

module.exports = model('User', UserSchema);
