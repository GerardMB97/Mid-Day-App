import React from 'react';
import { fireEvent, render, waitFor } from 'react-native-testing-library';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import * as actions from '../../redux/actions/userActions/userActions';
import SignIn from '.';

jest.mock('../../redux/actions/userActions/userActions');

describe('Given a SignIn component', () => {
  const mockStore = configureStore();
  const store = mockStore({ user: {} });
  jest.spyOn(actions, 'signIn').mockReturnValue({ type: '' });

  describe('When rendered', () => {
    test('Then it should render properly', async () => {
      const navigation = {
        navigate: jest.fn()
      };
      const tree = render(<Provider store={store} ><SignIn navigation = {navigation}></SignIn></Provider>);

      const realUseState = React.useState;
      jest
        .spyOn(React, 'useState')
        .mockImplementationOnce(() => realUseState(false))
        .mockImplementationOnce(() => realUseState(true));

      const emailInput = tree.getByTestId('emailInput');
      fireEvent.changeText(emailInput, 'hello');
      const pwdInput = tree.getByTestId('pwdInput');
      fireEvent.changeText(pwdInput, 'hello');
      const signinButton = tree.getByTestId('SignIn');
      fireEvent.press(signinButton);
      const navigateButton = tree.getByTestId('navigate');
      fireEvent.press(navigateButton);

      expect(tree).toMatchSnapshot();
    });
  });
  describe('When rendered with isLanding set to false and userstatus is 2', () => {
    test('Then it should invoke navigation.navigate', () => {
      const store = mockStore({ user: { status: 2 } });

      const navigation = {
        navigate: jest.fn()
      };

      render(<Provider store={store}><SignIn navigation= { navigation }></SignIn></Provider>);

      expect(navigation.navigate).toHaveBeenCalledWith('LandingPage');
    });
  });
  describe('When rendered with isLanding set to false and user status is 3', () => {
    test('Then it should render properly', async () => {
      const navigation = {
        navigate: jest.fn()
      };
      const store = mockStore({ user: { status: 3 } });
      const realUseState = React.useState;

      jest
        .spyOn(React, 'useState')
        .mockImplementationOnce(() => realUseState(true))
        .mockImplementationOnce(() => realUseState(false));

      const tree = render(<Provider store={store}><SignIn navigation= {navigation}></SignIn></Provider>);

      await waitFor(() => { expect(tree).toMatchSnapshot(); }, { timeout: 4100 });
    });
  });
});
