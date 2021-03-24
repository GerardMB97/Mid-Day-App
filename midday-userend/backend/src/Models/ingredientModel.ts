export {};
const { model, Schema } = require('mongoose');

const IngredientSchema = new Schema({
  category: String,
  ingredient: [Object]
});
module.exports = model('Ingredient', IngredientSchema);
