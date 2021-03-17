import ingredientActionsTypes from '../actions/ingredientActions/ingredientActionsTypes';
import initialState from '../store/initialState';
import { AnyAction } from 'redux';
import ingredientActionTypes from '../actions/ingredientActions/ingredientActionsTypes';

const ingredientReducer = (state = initialState.ingredients, action:AnyAction) => {
  switch (action.type) {
    case ingredientActionTypes.GET_INGREDIENTS:
      return action.data;
    default:
      return state;
  }
};

export default ingredientReducer;
