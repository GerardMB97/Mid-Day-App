import axios from 'axios';
import userActionTypes from './userActionTypes';
import { SignUpRoute, SignInRoute, updateUserIsNew } from '../../../constants/dataBase';
import { Dispatch } from 'redux';
export const signUp = (name:string, email:string, password:string) => {
  return async (dispatch:Dispatch) => {
    try {
      const { data } = await axios.post(SignUpRoute, { name, email, password });
      dispatch({
        type: userActionTypes.SIGN_UP,
        data
      });
    } catch (error) {
    }
  };
};

export const signIn = (email: string, password: string) => {
  return async (dispatch:Dispatch) => {
    try {
      const { data } = await axios.post(SignInRoute, { email, password });

      dispatch({
        type: userActionTypes.SIGN_IN,
        data
      });
    } catch (error) {
      dispatch({
        type: userActionTypes.SIGN_IN,
        data: null
      });
    }
  };
};

export const updateIsnew = ({ _id }:{_id:string}) => {
  return async (dispatch:Dispatch) => {
    try {
      const { data } = await axios.put(updateUserIsNew, { _id });
      dispatch({
        type: userActionTypes.UPDATE_ISNEW,
        data
      });
    } catch (error) {

    }
  };
};
