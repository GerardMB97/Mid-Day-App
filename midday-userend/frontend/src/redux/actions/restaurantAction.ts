import axios from 'axios';
import { Dispatch } from 'react';
import { FilterCategories, LoadCategoriesAction } from '../../models';
import restaurantActionTypes from './restaurantActionTypes';

export const loadCategories = () => {
  return async (dispatch: Dispatch<LoadCategoriesAction>) => {
    const { data } = await axios.get('http://localhost:5000/api/midday/restaurants/categories');

    dispatch({
      type: restaurantActionTypes.LOAD_CATEGORIES,
      categories: data
    });
  };
};

export const filterCategories = (value: string):FilterCategories => {
  console.log('1vez');
  return {
    type: restaurantActionTypes.FILTER_CATEGORIES,
    value
  };
};
