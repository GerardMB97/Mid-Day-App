const { model, Schema } = require('mongoose');

const CategorySchema = new Schema({
  name: String,
  image: String
});

export default model('Category', CategorySchema);
