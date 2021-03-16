import { combineReducers } from 'redux';
import categories from './categoriesReducer';
import restaurants from './restaurantReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  categories,
  restaurants,
  user
});

export default rootReducer;
