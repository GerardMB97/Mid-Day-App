import axios from 'axios';
import ingredientActionTypes from './ingredientActionsTypes';
import { getIngredientsRoute } from '../../../constants/dataBase';
import { Dispatch } from 'redux';
import { Ingredient } from '../../../models';

export const getIngredients = (user: any) => {
  return async (dispatch:Dispatch) => {
    const { data } = await axios.get(getIngredientsRoute);

    dispatch({
      type: ingredientActionTypes.GET_INGREDIENTS,
      data,
      user
    });
  };
};

export const updateAllergies = (ingredient:string) => {
  console.log('veryGood');
  return {
    type: ingredientActionTypes.UPDATE_ALLERGY,
    ingredient
  };
};
