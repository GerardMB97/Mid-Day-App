import bookingActionTypes from './bookingActionTypes';

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
