import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import * as actions from '../../redux/actions/userActions/userActions';
import SignIn from '.';

jest.mock('../../redux/actions/restaurantActions/restaurantAction');

describe('Given a SignIn component', () => {
  const mockStore = configureStore();
  const store = mockStore({ user: {} });
  jest.spyOn(actions, 'signIn').mockReturnValue({ type: '' });

  describe('When rendered', () => {
    test('Then it should render properly', () => {
      const tree = render(<Provider store={store}><SignIn></SignIn></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });
});
