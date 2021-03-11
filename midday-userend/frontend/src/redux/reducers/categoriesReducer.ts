import restaurantActionTypes from '../actions/restaurantActionTypes';
import { AnyAction } from 'redux';
import initialState from '../store/initialState';

const restaurantReducer = (state = initialState.categories, action:AnyAction) => {
  let filteredCategories;
  switch (action.type) {
    case restaurantActionTypes.LOAD_CATEGORIES:
      return {
        allCategories: action.categories,
        filteredCategories: action.categories
      };
    case restaurantActionTypes.FILTER_CATEGORIES:
      filteredCategories = state.allCategories.filter(({ name }) => name.toUpperCase().includes(action.value.toUpperCase()));
      return { ...state, filteredCategories };
    default:
      return state;
  }
};

export default restaurantReducer;
