import axios from 'axios';
import userActionTypes from './userActionTypes';
import { SignUpRoute } from '../../../constants/dataBase';
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
