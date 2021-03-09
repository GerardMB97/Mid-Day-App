import axios from 'axios';
import restaurantActionTypes from './restaurantActionTypes';

export const loadCategories = () => {
  return async (dispatch: Function) => {
    const { data } = await axios.get('http://localhost:5000/api/midday/restaurants/categories');

    dispatch({
      type: restaurantActionTypes.LOAD_CATEGORIES,
      categories: data
    });
  };
}
;
