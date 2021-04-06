import userActionTypes from './userActionTypes';
import {
  signUp,
  signIn,
  updateIsnew,
  updateUserAllergies,
  updateAllergiesDB,
  deleteBooking,
  deleteInvitation,
  createBooking,
  addBookingToUser
} from './userActions';
import axios from 'axios';

describe('Given a function signUp', () => {
  describe('When invoked with name email and pwd', () => {
    test('It should invoked function dispatch with an object with type SIGN_UP and data {}', async () => {
      axios.post = jest.fn().mockReturnValueOnce({ data: {} });
      const dispatch = jest.fn();
      const dispatchFn = signUp('gerard', 'gerard', 'gerard');
      await dispatchFn(dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: userActionTypes.SIGN_UP, data: {} });
    });
  });
});
describe('Given a function signIn', () => {
  describe('When invoked with email and pwd', () => {
    test('it should dispatch an action with type SIGN_IN and data {}', async () => {
      axios.post = jest.fn().mockResolvedValueOnce({ data: {} });
      const dispatch = jest.fn();
      const dispatchFn = signIn('gerard', 'gerard');
      await dispatchFn(dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: userActionTypes.SIGN_IN, data: {} });
    });
  });
  describe('When invoked with email and pwd', () => {
    test('it should dispatch an action with type SIGN_IN and data null of ot throws an error', async () => {
      axios.post = jest.fn().mockImplementationOnce(() => { throw new Error(); });
      const dispatch = jest.fn();
      const dispatchFn = signIn('gerard', 'gerard');
      await dispatchFn(dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: userActionTypes.SIGN_IN, data: null });
    });
  });
});
describe('Given an updateIsNew action', () => {
  describe('When invoked with 1234', () => {
    test('Then dispatch should be called with {type:UPDATE_ISNEW, data:1234}', async () => {
      const dispatch = jest.fn();
      axios.put = jest.fn().mockReturnValueOnce({ data: '1234' });
      const dispatcherFn = updateIsnew({ _id: '1234' });
      await dispatcherFn(dispatch);
      expect(dispatch).toHaveBeenCalledWith({ type: userActionTypes.UPDATE_ISNEW, data: '1234' });
    });
  });
});
describe('Given a function updateUserAllergies', () => {
  describe('When invoked with carrot', () => {
    test('It should return  an action with type UPDATE_USER_ALLERGIES and allergen: carrot', () => {
      const action = updateUserAllergies('carrot');
      expect(action).toEqual({ type: userActionTypes.UPDATE_USER_ALLERGIES, allergen: 'carrot' });
    });
  });
});
describe('Given a function updateAllergiesDB', () => {
  describe('When invoked with an object with _id and allergies', () => {
    test('Then it should dispatch an action with type UPDATE_ALLERGIES_DB and user: the data from axios.put', async () => {
      axios.put = jest.fn().mockReturnValueOnce({ data: 'hello' });
      const dispatch = jest.fn();
      const input = { _id: '1234', allergies: 'hi' };

      const dispatcherFn = updateAllergiesDB(input);
      await dispatcherFn(dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: userActionTypes.UPDATE_ALLERGIES_DB, user: 'hello' });
    });
  });
});
describe('Given a function deleteBooking', () => {
  describe('When invoked an object with email and  bookingId', () => {
    test('Then dispatch should be invoked with type delete_booking and user the data of the axios.put return', async () => {
      const dispatch = jest.fn();
      axios.put = jest.fn().mockReturnValueOnce({ data: 'hello' });
      const bookingId = '13';
      const user = { email: 'Gerard@gmail.com' };

      const dispatcherFn = deleteBooking(user, bookingId);
      await dispatcherFn(dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: userActionTypes.DELETE_BOOKING, user: 'hello' });
    });
  });
});
describe('Given a function deleteInvitation', () => {
  describe('When invoked with userId, bookingId and mode', () => {
    test('Then it should dispatch an action with type DELETE_INVITATION and user the data property of the axios.put return', async () => {
      const dispatch = jest.fn();
      axios.put = jest.fn().mockReturnValue({ data: 'hello' });

      const dispatcherFn = deleteInvitation('12', '1234', true);
      await dispatcherFn(dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: userActionTypes.DELETE_INVITATION, user: 'hello' });
    });
  });
  describe('When invoked with userId, bookingId and mode', () => {
    test('Then it should dispatch an action with type DELETE_INVITATION and user the data property of the axios.put return', async () => {
      const dispatch = jest.fn();
      axios.put = jest.fn().mockReturnValue({ data: 'hello' });

      const dispatcherFn = deleteInvitation('12', '1234', false);
      await dispatcherFn(dispatch);

      expect(axios.put).toHaveBeenCalledTimes(1);
    });
  });
});
describe('Given a function createBooking', () => {
  describe('When invoked with all necessary arguments ', () => {
    test('Then dispatch should be invoked with type CREATE_BOOKING and user the data property of axios.put', async () => {
      const dispatch = jest.fn();
      axios.post = jest.fn().mockReturnValueOnce({ data: { people: [1, { user: '121' }, 3] } });
      axios.put = jest.fn().mockReturnValue({ data: 'HELLO' });
      const dispatcherFn = createBooking('123', '1234', '121', 12, ['1', '2', '3'], '1234');
      await dispatcherFn(dispatch);
      expect(dispatch).toHaveBeenCalledWith({ type: userActionTypes.CREATE_BOOKING, user: 'HELLO' });
    });
  });
});
describe('Given a function addBookingToUser', () => {
  describe('When invoked with userId and bookingId', () => {
    test('Then it should dispatch an action with type CREATE_BOOKING and user the data propery of the axios.put return', async () => {
      const dispatch = jest.fn();
      axios.put = jest.fn().mockReturnValueOnce({ data: 'hello' });

      const dispatcherFn = addBookingToUser('12', '12');
      await dispatcherFn(dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: userActionTypes.CREATE_BOOKING, user: 'hello' });
    });
  });
});
