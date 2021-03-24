import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render } from 'react-native-testing-library';

import CategoriesList from './index';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../redux/actions/restaurantActions/restaurantAction';
import * as ingredientActions from '../../redux/actions/ingredientActions/ingredientActions';

jest.mock('../../redux/actions/restaurantActions/restaurantAction');
jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');
const restaurants = {
  allRestaurants: [],
  categoryRestaurants: [],
  filteredRestaurants: []
};
const mockStore = configureStore([thunk]);
const store = mockStore({ categories: { allCategories: [{ name: 'asian' }], filteredCategories: [] }, restaurants, user: {}, ingredients: [] });

beforeEach(() => {
  jest.spyOn(actions, 'filterSearchBar').mockReturnValueOnce({ type: '' });
  jest.spyOn(actions, 'loadCategories').mockReturnValueOnce({ type: '' });
  jest.spyOn(actions, 'loadRestaurants').mockReturnValueOnce({ type: '' });
  jest.spyOn(ingredientActions, 'getIngredients').mockReturnValueOnce({ type: '' });
});

describe('Given a CategoriesList component', () => {
  test('Renders correctly', () => {
    const rendered = render(
      <Provider store={store}><CategoriesList /></Provider>
    );
    expect(rendered).toMatchSnapshot();
  });
});
describe('When a category is clicked', () => {
  test('Then it should navigate', () => {
    const navigation = {
      navigate: jest.fn()
    };

    const { getByTestId } = render(<Provider store={store}><CategoriesList navigation = {navigation}/></Provider>);
    fireEvent.press(getByTestId('asian'));

    expect(navigation.navigate).toHaveBeenCalled();
  });
});
describe('When inputValue has length', () => {
  test('Then it should render filteredCategories', () => {
    const realUseState = React.useState;
    const stubInitialState = 'asiatica';
    const store1 = mockStore({ categories: { allCategories: [], filteredCategories: [{ name: 'asian' }] }, restaurants, user: {}, ingredients: [] });

    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => realUseState(stubInitialState));

    const rendered = render(<Provider store={store1}><CategoriesList/></Provider>);
    expect(rendered).toMatchSnapshot();
  });
});
describe('When inputValue has length and filtered categories doesnt', () => {
  test('Then it should render Notfound component', () => {
    const realUseState = React.useState;
    const stubInitialState = 'asiatica';
    const store2 = mockStore({ categories: { allCategories: [], filteredCategories: [] }, restaurants: { allRestaurants: [{ name: 'elpepe' }], filteredRestaurants: [], categoryRestaurants: [] }, user: {}, ingredients: [] });

    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => realUseState(stubInitialState));

    const rendered = render(<Provider store={store2}><CategoriesList/></Provider>);
    expect(rendered).toMatchSnapshot();
  });
});
describe('When allCategories has no length', () => {
  test('Then loadCategories should be invoked', () => {
    const store3 = mockStore({ categories: { allCategories: [], filteredCategories: [] }, restaurants, user: {}, ingredients: [] });

    render(<Provider store={store3}><CategoriesList/></Provider>);
    expect(actions.loadCategories).toHaveBeenCalled();
  });
});
