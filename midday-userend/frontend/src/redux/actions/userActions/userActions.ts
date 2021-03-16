import axios from 'axios';
import userActionTypes from './userActionTypes';
import { SignUpRoute } from '../../../constants/dataBase';
export const signUp = async (name:string, email:string, password:string) => {
  try {
    const { data } = await axios.post(SignUpRoute, { name, email, password });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
