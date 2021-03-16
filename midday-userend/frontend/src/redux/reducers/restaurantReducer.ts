import { AnyAction } from 'redux';
import restaurantActionTypes from '../actions/restaurantActions/restaurantActionTypes';
import initialState from '../store/initialState';

const restaurantReducer = (state = initialState.restaurants, action:AnyAction) => {
  let categoryRestaurants;
  let filteredRestaurants;
  let index;
  switch (action.type) {
    case restaurantActionTypes.LOAD_RESTAURANTS:
      return { ...state, allRestaurants: action.restaurants };
    case restaurantActionTypes.GET_CATEGORY_RESTAURANTS:
      categoryRestaurants = state.allRestaurants.filter(({ category }) => category.name === action.category);
      return { ...state, categoryRestaurants };
    case restaurantActionTypes.FILTER_RESTAURANTS:
      filteredRestaurants = state.categoryRestaurants.filter(({ name }) => name.toUpperCase().includes(action.value.toUpperCase()));
      return { ...state, filteredRestaurants };
    case restaurantActionTypes.GET_SELECTED_RESTAURANT:
      index = state.categoryRestaurants.findIndex(({ _id }) => _id === action._id);
      return { ...state, selectedRestaurant: state.categoryRestaurants[index] };
    default:
      return state;
  }
};

export default restaurantReducer;
