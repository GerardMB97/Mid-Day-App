import axios from 'axios';
import userActionTypes from './userActionTypes';
import { SignUpRoute, SignInRoute, updateUserIsNew, deleteBookingRoute, deleteInvitationRoute, updateBookingPaxRoute, updateAllergiesRoute } from '../../../constants/dataBase';
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

export const updateUserAllergies = (allergen: string) => {
  return {
    type: userActionTypes.UPDATE_USER_ALLERGIES,
    allergen
  };
};

export const updateAllergiesDB = ({ _id, allergies }:any) => {
  return async (dispatch:Dispatch) => {
    try {
      const { data } = await axios.put(updateAllergiesRoute, { _id, allergies });

      dispatch({
        type: userActionTypes.UPDATE_ALLERGIES_DB,
        user: data
      });
    } catch (error) {

    }
  };
};

export const deleteBooking = ({ email }: {email:string}, bookingId:string) => {
  return async (dispatch:Dispatch) => {
    const { data } = await axios.put(`${deleteBookingRoute}${email}`, { bookingId });

    dispatch({
      type: userActionTypes.DELETE_BOOKING,
      user: data
    });
  };
};

export const deleteInvitation = (userId:string, invitationId:string) => {
  return async (dispatch:Dispatch) => {
    try {
      await axios.put(updateBookingPaxRoute, { userId, bookingId: invitationId });
      const { data } = await axios.put(deleteInvitationRoute, { userId, invitationId });
      console.log(data);
      dispatch({
        type: userActionTypes.DELETE_INVITATION,
        user: data
      });
    } catch (error) {

    }
  };
};
