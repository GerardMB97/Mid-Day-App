import { AnyAction } from 'redux';
import userActionTypes from '../actions/userActions/userActionTypes';
import initialState from '../store/initialState';

const userReducer = (state = initialState.user, action:AnyAction) => {
  let index;
  let newState;
  switch (action.type) {
    case userActionTypes.SIGN_UP:
      return typeof (action.data) === 'number' ? { ...state, status: 1 } : { ...action.data, status: 2 };

    case userActionTypes.SIGN_IN:
      return action.data === null ? { ...state, status: 3 } : { ...action.data, status: 2 };
    case userActionTypes.UPDATE_ISNEW:
      return action.data;
    case userActionTypes.UPDATE_USER_ALLERGIES:
      newState = [...state.allergies];
      index = newState.findIndex((item) => item === action.allergen);
      index === -1
        ? newState.push(action.allergen)
        : newState.splice(index, 1);
      return { ...state, allergies: newState };
    case userActionTypes.DELETE_BOOKING:
      return action.user;
    case userActionTypes.DELETE_INVITATION:
      console.log(action.user);
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
