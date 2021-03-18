import initialState from '../store/initialState';
import { AnyAction } from 'redux';
import ingredientActionTypes from '../actions/ingredientActions/ingredientActionsTypes';
import { Ingredient } from '../../models/index';

const ingredientReducer = (state = initialState.ingredients, action:AnyAction) => {
  let allergens;
  switch (action.type) {
    case ingredientActionTypes.GET_INGREDIENTS:
      allergens = action.data.map((ingredient:Ingredient) => ({ category: ingredient, isAllergic: action.user.allergies.includes(ingredient) }));
      return allergens;
    default:
      return state;
  }
};

export default ingredientReducer;
