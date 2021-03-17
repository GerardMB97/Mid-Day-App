import { AnyAction } from 'redux';
import userActionTypes from '../actions/userActions/userActionTypes';
import initialState from '../store/initialState';

const userReducer = (state = initialState.user, action:AnyAction) => {
  switch (action.type) {
    case userActionTypes.SIGN_UP:

      return typeof (action.data) === 'number' ? { ...state, status: 1 } : { ...action.data, status: 2 };
    case userActionTypes.SIGN_IN:
      console.log('hello');
      return action.data === null ? { ...state, status: 1 } : { ...action.data, status: 2 };
    default:
      return state;
  }
};

export default userReducer;
