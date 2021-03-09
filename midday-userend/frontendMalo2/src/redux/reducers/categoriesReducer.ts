import restaurantActionTypes from '../actions/restaurantActionTypes';
import { RestaurantAction, Category } from '../../models';
import initialState from '../store/initialState';

const restaurantReducer = (state = initialState.categories, action:RestaurantAction):Category[] => {
  switch (action.type) {
    case restaurantActionTypes.LOAD_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};

export default restaurantReducer;
