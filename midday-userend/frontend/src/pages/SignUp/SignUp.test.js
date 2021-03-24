import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import * as actions from '../../redux/actions/userActions/userActions';
import SignUp from '.';

jest.mock('../../redux/actions/userActions/userActions');

describe('Given a component SignUp', () => {
  jest.spyOn(actions, 'signUp').mockReturnValue({ type: '' });
  const mockStore = configureStore();
  const store = mockStore({ user: { status: 1 } });
  const navigation = { navigate: jest.fn() };
  describe('When rendered with user status 1', () => {
    test('Then it should match the snapshot', () => {
      const tree = render(<Provider store={store}><SignUp navigation ={navigation}></SignUp></Provider>);

      const emailInput = tree.getByTestId('emailInput');
      fireEvent.changeText(emailInput, 'hello');

      const nameInput = tree.getByTestId('nameInput');
      fireEvent.changeText(nameInput, 'hello');

      const pwdInput = tree.getByTestId('pwdInput');
      fireEvent.changeText(pwdInput, 'hello');

      const repeatedPwdInput = tree.getByTestId('repeatedPWdInput');
      fireEvent.changeText(repeatedPwdInput, 'hello');

      const signinButton = tree.getByTestId('Register');
      fireEvent.press(signinButton);

      const navigateButton = tree.getByTestId('navigate');
      fireEvent.press(navigateButton);

      const realUseState = React.useState;
      jest
        .spyOn(React, 'useState')
        .mockImplementationOnce(() => realUseState('hi'))
        .mockImplementationOnce(() => realUseState('hi'))
        .mockImplementationOnce(() => realUseState('hi'))
        .mockImplementationOnce(() => realUseState('hi'))
        .mockImplementationOnce(() => realUseState(true))
        .mockImplementationOnce(() => realUseState(true))
        .mockImplementationOnce(() => realUseState(true))
        .mockImplementationOnce(() => realUseState(true))
        .mockImplementationOnce(() => realUseState(true));
      expect(tree).toMatchSnapshot();
    });
  });
  describe('When rendered with user status 2', () => {
    test('Then it should match the snapshot', () => {
      const store = mockStore({ user: { status: 2 } });

      const tree = render(<Provider store={store}><SignUp navigation ={navigation}></SignUp></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });
});
