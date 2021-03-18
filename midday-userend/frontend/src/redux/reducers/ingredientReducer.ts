import initialState from '../store/initialState';
import { AnyAction } from 'redux';
import ingredientActionTypes from '../actions/ingredientActions/ingredientActionsTypes';
import { Ingredient } from '../../models/index';

const ingredientReducer = (state = initialState.ingredients, action:AnyAction) => {
  let allergens;
  let newState;
  switch (action.type) {
    case ingredientActionTypes.GET_INGREDIENTS:
      allergens = action.data.map((ingredient:Ingredient) => ({ category: ingredient, isAllergic: action.user.allergies.includes(ingredient) }));
      return allergens;
    case ingredientActionTypes.UPDATE_ALLERGY: {
      newState = state.map((item) => {
        if (item.category === action.ingredient) {
          return { ...item, isAllergic: !item.isAllergic };
        } else { return item; }
      });
      return newState;
    }

    default:
      return state;
  }
};

export default ingredientReducer;
