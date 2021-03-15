import { combineReducers } from 'redux';
import categories from './categoriesReducer';
import restaurants from './restaurantReducer';

const rootReducer = combineReducers({
  categories,
  restaurants
});

export default rootReducer;
