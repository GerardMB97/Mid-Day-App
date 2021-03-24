import bookingActionTypes from '../../redux/actions/bookingActions/bookingActionTypes';
import { AnyAction } from 'redux';
import initialState from '../store/initialState';

const bookingReducer = (state = initialState.booking, action:AnyAction) => {
  let newPeople;
  switch (action.type) {
    case bookingActionTypes.SAVE_SELECTION:
      console.log(state);
      if (state.people.findIndex(person => person.user === action.user._id) === -1) {
        return {
          ...state, people: [...state.people, { user: action.user._id, selections: action.data }]
        };
      } newPeople = state.people.map(person => {
        if (person.user === action.user._id) {
          return { ...person, selections: action.data };
        } return person;
      });
      return { ...state, people: newPeople };

    case bookingActionTypes.RESET_BOOKING:
      return initialState.booking;
    case bookingActionTypes.INVITE:
      return { ...state, people: [...state.people, { user: action._id }] };
    case bookingActionTypes.GET_BOOKING:
      return action.booking;
    default:
      return state;
  }
};

export default bookingReducer;
