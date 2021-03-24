import axios from 'axios';
import userActionTypes from './userActionTypes';

import { SignUpRoute, SignInRoute, updateUserIsNew, deleteBookingRoute, deleteInvitationRoute, updateBookingPaxRoute, updateAllergiesRoute, newBookingRoute, bookingToRestRoute, bookingToUserRoute } from '../../../constants/dataBase';
import { Dispatch } from 'redux';
import { addInvitation } from '../../../utils';
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
      dispatch({
        type: userActionTypes.DELETE_INVITATION,
        user: data
      });
    } catch (error) {

    }
  };
};

export const createBooking = (date, hour, bookingAdmin, pax, people, restaurantId) => {
  return async (dispatch:Dispatch) => {
    try {
      const booking = {
        date,
        hour,
        bookingAdmin,
        pax,
        people,
        restaurant: restaurantId

      };
      const { data } = await axios.post(newBookingRoute, booking);

      data.people.forEach(async (person) => { if (bookingAdmin !== person.user) { await addInvitation(person.user, data._id); } });
      const reqBody = {
        bookingId: data._id,
        restaurantId

      };
      await axios.put(bookingToRestRoute, reqBody);
      const userReqBody = {
        bookingId: data._id,
        userId: bookingAdmin
      };
      const user = await axios.put(bookingToUserRoute, userReqBody);
      dispatch({
        type: userActionTypes.CREATE_BOOKING,
        user: user.data
      });
    } catch (error) {

    }
  };
};
