import React from 'react';
import WelcomeModal from '.';
import { render, fireEvent } from 'react-native-testing-library';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/userActions/userActions';

const mockStore = configureStore();
const store = mockStore({});

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');
jest.mock('../../redux/actions/userActions/userActions');
jest.spyOn(actions, 'updateAllergiesDB').mockReturnValueOnce({ type: '' });
jest.spyOn(actions, 'updateIsnew').mockReturnValueOnce({ type: '' });
describe('Given a Welcome Modal component', () => {
  describe('When button with text Guardar is pressed', () => {
    test('Then it should invoke updateAllergiesDB action', () => {
      const tree = render(<Provider store={store}><WelcomeModal></WelcomeModal></Provider>);
      const button = tree.getByText('Guardar');
      fireEvent.press(button);

      expect(actions.updateAllergiesDB).toHaveBeenCalled();
    });
  });
});
