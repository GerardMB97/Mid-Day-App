import { combineReducers } from 'redux';
import categories from './categoriesReducer';

const rootReducer = combineReducers({
  categories
});

export default rootReducer;
