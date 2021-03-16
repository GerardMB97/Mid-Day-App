import userActionTypes from './userActionTypes';
import { signUp } from './userActions';
import axios from 'axios';

describe('Given a function signUp', () => {
  axios.post = jest.fn().mockReturnValueOnce({ data: {} });
  describe('When invoked with name email and pwd', () => {
    test('It should invoked function dispatch with an object with type SIGN_UP and data {}', async () => {
      const dispatch = jest.fn();
      const dispatchFn = signUp('gerard', 'gerard', 'gerard');
      await dispatchFn(dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: userActionTypes.SIGN_UP, data: {} });
    });
  });
});
