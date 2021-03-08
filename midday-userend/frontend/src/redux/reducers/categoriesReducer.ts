import restaurantActionTypes from '../actions/restaurantActionTypes';
import { RestaurantAction } from '../../models';

const restaurantReducer = (state = [], action:RestaurantAction) => {
  switch (action.type) {
    case restaurantActionTypes.LOAD_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};

export default restaurantReducer;
