import { combineReducers } from 'redux';
import categories from './categoriesReducer';
import restaurants from './restaurantReducer';
import user from './userReducer';
import ingredients from './ingredientReducer';

const rootReducer = combineReducers({
  categories,
  restaurants,
  user,
  ingredients
});

export default rootReducer;
