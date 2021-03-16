import { AnyAction } from 'redux';
import userActionTypes from '../actions/userActions/userActionTypes';
import initialState from '../store/initialState';

const userReducer = (state = initialState.user, action:AnyAction) => {
  switch (action.type) {
    case userActionTypes.SIGN_UP:
      console.log(action.data);
      return typeof (action.data) === 'number' ? { ...state, status: 1 } : { ...action.data, status: 2 };
    default:
      return state;
  }
};

export default userReducer;
