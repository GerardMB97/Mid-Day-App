import { AnyAction } from 'redux';
import restaurantActionTypes from '../actions/restaurantActionTypes';
import initialState from '../store/initialState';

const restaurantReducer = (state = initialState.restaurants, action:AnyAction) => {
  switch (action.type) {
    case restaurantActionTypes.LOAD_RESTAURANTS:
      return { ...state, allRestaurants: action.restaurants };
    default:
      return state;
  }
};

export default restaurantReducer;
