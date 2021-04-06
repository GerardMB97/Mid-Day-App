import { saveMenuSelection, getDay, handleInvitation, getBooking } from './bookingActions';
import bookingActionTypes from './bookingActionTypes';
import axios from 'axios';

describe('Given a saveMenuSelection function', () => {
  describe('When invoked with firs second 3rd and a user', () => {
    test('Then it should return an action with type SAVE_SELECTION data an array with 1st second and third and user', () => {
      const user = {};
      const first = 'Macarrones';
      const second = 'Pollo';
      const dessert = 'Natillas';
      const expectedAction = {
        type: bookingActionTypes.SAVE_SELECTION,
        data: [first, second, dessert],
        user
      };
      const action = saveMenuSelection(first, second, dessert, user);
      expect(action).toEqual(expectedAction);
    });
  });
});
describe('Given a function getDay', () => {
  describe('When invoked with 12-01-21', () => {
    test('Then it should return 12', () => {
      expect(getDay('12-01-21')).toBe('12');
    });
  });
});
describe('Given a function handleInvitation', () => {
  describe('When invoked with email, invitations, setInvitations and an object with property people and if thar person hasnt been invited yet', () => {
    test('Then dispatch should be invoked with type INVITE and the user _id', async () => {
      const email = 'gerard@gmail.com';

      const invitations = 3;
      const setInvitations = jest.fn();
      const booking = { people: [{ _id: '1234' }] };
      const dispatch = jest.fn();
      axios.get = jest.fn().mockReturnValueOnce({ data: { _id: '123' } });

      const dispatcherFn = handleInvitation(email, invitations, setInvitations, booking);
      await dispatcherFn(dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: bookingActionTypes.INVITE, _id: '123' });
    });
  });
  describe('When invoked with email, invitations, setInvitations and an object with property people and if that person has already been invited', () => {
    test('Then dispatch should be invoked with type ""', async () => {
      const email = 'gerard@gmail.com';

      const invitations = 3;
      const setInvitations = jest.fn();
      const booking = { people: [{ user: '1234' }] };
      const dispatch = jest.fn();
      axios.get = jest.fn().mockReturnValueOnce({ data: { _id: '1234' } });

      const dispatcherFn = handleInvitation(email, invitations, setInvitations, booking);
      await dispatcherFn(dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: '' });
    });
  });
  describe('When invoked with email, invitations, setInvitations and an object with property people and if axios.get gives an error', () => {
    test('Then dispatch should be invoked with type "hello"', async () => {
      const email = 'gerard@gmail.com';

      const invitations = 3;
      const setInvitations = jest.fn();
      const booking = { people: [{ user: '1234' }] };
      const dispatch = jest.fn();
      axios.get = jest.fn().mockImplementationOnce(() => { throw new Error(); });

      const dispatcherFn = handleInvitation(email, invitations, setInvitations, booking);
      await dispatcherFn(dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: 'hello' });
    });
  });
});
describe('Given a function getBooking', () => {
  describe('When invoked with an id', () => {
    test('Then it should dispatcg an action with type GET_BOOKING and user the data property from the axios.get return ', async () => {
      const dispatch = jest.fn();
      axios.get = jest.fn().mockReturnValueOnce({ data: { name: 'Peter' } });
      const id = '1234';

      const dispatcher = getBooking(id);
      await dispatcher(dispatch);

      expect(dispatch).toHaveBeenLastCalledWith({ type: bookingActionTypes.GET_BOOKING, booking: { name: 'Peter' } });
    });
  });
});
