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

export const filterCategories = (value: string):FilterCategories => {
  return {
    type: restaurantActionTypes.FILTER_CATEGORIES,
    value
  };
};

export const loadRestaurants = () => {
  return async (dispatch: Dispatch<LoadRestaurantAction>) => {
    const { data } = await axios.get('http://192.168.0.36:5000/api/midday/restaurants');

    dispatch({
      type: restaurantActionTypes.LOAD_RESTAURANTS,
      restaurants: data
    });
  };
};

const actions = {
  filterCategories,
  loadCategories
};
export default actions;
