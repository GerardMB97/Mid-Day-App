import axios from 'axios';
import ingredientActionTypes from './ingredientActionsTypes';
import { getIngredientsRoute } from '../../../constants/dataBase';
import { Dispatch } from 'redux';
import { User } from '../../../models';

export const getIngredients = (user:User) => {
  return async (dispatch:Dispatch) => {
    const { data } = await axios.get(getIngredientsRoute);

    dispatch({
      type: ingredientActionTypes.GET_INGREDIENTS,
      data,
      user
    });
  };
};
