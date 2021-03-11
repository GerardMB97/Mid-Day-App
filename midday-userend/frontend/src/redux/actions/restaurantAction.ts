import axios from 'axios';
import { Dispatch } from 'react';
import { FilterCategories, LoadCategoriesAction, LoadRestaurantAction } from '../../models';
import restaurantActionTypes from './restaurantActionTypes';

export const loadCategories = () => {
  return async (dispatch: Dispatch<LoadCategoriesAction>) => {
    const { data } = await axios.get('http://192.168.0.36:5000/api/midday/restaurants/categories');

    dispatch({
      type: restaurantActionTypes.LOAD_CATEGORIES,
      categories: data
    });
  };
};

export const filterSearchBar = (value: string, type: string):FilterCategories => {
  const actionType = type === 'categories' ? restaurantActionTypes.FILTER_CATEGORIES : restaurantActionTypes.FILTER_RESTAURANTS;
  return {
    type: actionType,
    value
  };
};

export const loadRestaurants = () => {
  return async (dispatch: Dispatch<LoadRestaurantAction>) => {
    const { data } = await axios.get('http://192.168.0.36:5000/api/midday/restaurants');
    await console.log(data);

    dispatch({
      type: restaurantActionTypes.LOAD_RESTAURANTS,
      restaurants: data
    });
  };
};

export const getCategoryRestaurants = (category: string) => {
  return {
    type: restaurantActionTypes.GET_CATEGORY_RESTAURANTS,
    category
  };
};

const actions = {
  filterSearchBar,
  loadCategories,
  loadRestaurants
};
export default actions;
