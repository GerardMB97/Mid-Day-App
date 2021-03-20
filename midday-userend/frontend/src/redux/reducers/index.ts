import { combineReducers } from 'redux';
import categories from './categoriesReducer';
import restaurants from './restaurantReducer';
import user from './userReducer';
import ingredients from './ingredientReducer';
import booking from './bookingReducer';

const rootReducer = combineReducers({
  categories,
  restaurants,
  user,
  ingredients,
  booking
});

export default rootReducer;
