import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { fireEvent, render } from 'react-native-testing-library';
import AllergiesList from '.';
import * as actions from '../../redux/actions/ingredientActions/ingredientActions';

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');
jest.mock('../../redux/actions/ingredientActions/ingredientActions');

const mockStore = configureStore();
const store = mockStore({});
describe('Given an Allergies list component', () => {
  beforeEach(() => {
    jest.spyOn(actions, 'updateAllergies').mockReturnValueOnce({ type: '' });
  });
  describe('When rendered,', () => {
    test('Then it should match its snapshot', () => {
      const tree = render(<Provider store = {store}><AllergiesList ingredients = {[{ ingredient: 'carrot', isAllergic: false }, { ingredient: 'cucumber', isAllergic: true }]}></AllergiesList></Provider>);
      const button = tree.getByTestId('carrot');
      fireEvent.press(button);
      expect(tree).toMatchSnapshot();
    });
  });
  describe('When a button is clicked,', () => {
    test('Then it should invoke actions.updateAllergies', () => {
      const tree = render(<Provider store = {store}><AllergiesList ingredients = {[{ ingredient: 'carrot', isAllergic: false }, { ingredient: 'cucumber', isAllergic: true }]}></AllergiesList></Provider>);
      const button = tree.getByTestId('carrot');
      fireEvent.press(button);
      expect(actions.updateAllergies).toHaveBeenCalled();
    });
  });
});
