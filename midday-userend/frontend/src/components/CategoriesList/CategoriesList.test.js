import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render } from 'react-native-testing-library';

import CategoriesList from './CategoriesList';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../redux/actions/restaurantAction';

jest.mock('../../redux/actions/restaurantAction');
jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');

describe('Given a CategoriesList component', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({ categories: { allCategories: [{ name: 'asian' }], filteredCategories: [] } });

  beforeEach(() => {
    jest.spyOn(actions, 'filterCategories').mockReturnValueOnce({ type: '' });
    jest.spyOn(actions, 'loadCategories').mockReturnValueOnce({ type: '' });
  });
  test('Renders correctly', () => {
    const rendered = render(
      <Provider store={store}><CategoriesList /></Provider>
    );
    expect(rendered).toMatchSnapshot();
  });
  describe('When input value changes ', () => {
    test('Then onChangeText should be invoked', () => {
      const tree = render(
      <Provider store={store}><CategoriesList /></Provider>
      );

      const textInput = tree.getByPlaceholder('Tipo de menú o restaurante');

      fireEvent.changeText(textInput, 'asiatica');

      expect(actions.filterCategories).toHaveBeenCalled();
    });
  });
});
