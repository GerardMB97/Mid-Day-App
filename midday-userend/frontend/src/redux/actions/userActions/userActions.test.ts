import userActionTypes from './userActionTypes';
import {
  signUp,
  signIn,
  updateIsnew,
  updateUserAllergies
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
