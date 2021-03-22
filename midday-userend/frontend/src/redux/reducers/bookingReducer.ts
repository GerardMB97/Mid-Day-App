import bookingActionTypes from '../../redux/actions/bookingActions/bookingActionTypes';
import { AnyAction } from 'redux';
import initialState from '../store/initialState';

const bookingReducer = (state = initialState.booking, action:AnyAction) => {
  switch (action.type) {
    case bookingActionTypes.SAVE_SELECTION:
      return {
        ...state, people: [...state.people, { user: action.user._id, selections: action.data }]
      };
    case bookingActionTypes.RESET_BOOKING:
      return initialState.booking;
    case bookingActionTypes.INVITE:
      console.log('hello');
      return { ...state, people: [...state.people, { user: action._id }] };
    default:
      return state;
  }
};

export default bookingReducer;
