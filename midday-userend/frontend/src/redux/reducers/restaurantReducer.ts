import { AnyAction } from 'redux';
import restaurantActionTypes from '../actions/restaurantActionTypes';
import initialState from '../store/initialState';

const restaurantReducer = (state = initialState.restaurants, action:AnyAction) => {
  let categoryRestaurants;
  let filteredRestaurants;
  switch (action.type) {
    case restaurantActionTypes.LOAD_RESTAURANTS:
      return { ...state, allRestaurants: action.restaurants };
    case restaurantActionTypes.GET_CATEGORY_RESTAURANTS:
      categoryRestaurants = state.allRestaurants.filter(({ category }) => category.name === action.category);
      return { ...state, categoryRestaurants };
    case restaurantActionTypes.FILTER_RESTAURANTS:
      console.log(action);
      filteredRestaurants = state.categoryRestaurants.filter(({ name }) => name.toUpperCase().includes(action.value.toUpperCase()));
      return { ...state, filteredRestaurants };
    default:
      return state;
  }
};

export default restaurantReducer;
