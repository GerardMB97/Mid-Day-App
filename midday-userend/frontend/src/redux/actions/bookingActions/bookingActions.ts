import { Dispatch } from 'redux';
import bookingActionTypes from './bookingActionTypes';
import axios from 'axios';
import { findUserRoute } from '../../../constants/dataBase';

export const saveMenuSelection = (first, second, dessert, user) => {
  return {
    type: bookingActionTypes.SAVE_SELECTION,
    data: [first, second, dessert],
    user
  };
};

export const resetBooking = () => {
  return {
    type: bookingActionTypes.RESET_BOOKING
  };
};

export const getDay = (date: string) => {
  return date.split('-')[0];
};

export const handleInvitation = (email: string, invitations, setInvitations, { people }) => {
  console.log(people);
  return async (dispatch:Dispatch) => {
    try {
      const { data: { _id } } = await axios.get(`${findUserRoute}${email}`);
      if (people.findIndex(person => person.user === _id) !== -1) {
        dispatch({
          type: ''
        });
      } else {
        setInvitations(invitations + 1);
        dispatch({
          type: bookingActionTypes.INVITE,
          _id
        });
      }
    } catch (error) {
      dispatch({
        type: 'hello'
      });
    }
  };
};
