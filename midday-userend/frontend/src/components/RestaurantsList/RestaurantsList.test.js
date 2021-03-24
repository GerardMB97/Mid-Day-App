import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from 'react-native-testing-library';
import configureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/restaurantActions/restaurantAction';
import RestaurantsList from '../RestaurantsList';

jest.mock('../../redux/actions/restaurantActions/restaurantAction');
jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');
jest.mock('@react-navigation/native');

describe('Given a component RestaurantsList', () => {
  const restaurants = {
    allRestaurants: [{ _id: '3' }],
    categoryRestaurants: [{ name: 'asian', _id: '1' }],
    filteredRestaurants: [{ name: 'hi', _id: '2' }]
  };
  jest.spyOn(actions, 'getCategoryRestaurants').mockReturnValue({ type: '' });
  const mockStore = configureStore();
  const store = mockStore({ restaurants });

  describe('When invoked', () => {
    test('Then it should render correctly', () => {
      const tree = render(<Provider store={store}><RestaurantsList route={{ params: 'hi' }} navigation={{ isFocused: jest.fn() }}></RestaurantsList></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });
  describe('When has inputValue.length ', () => {
    test('Then it should render filteredRestaurants', () => {
      const realUseState = React.useState;
      const stubInitialState = 'asiatica';

      jest
        .spyOn(React, 'useState')
        .mockImplementationOnce(() => realUseState(stubInitialState));
      const tree = render(<Provider store={store}><RestaurantsList route={{ params: 'hi' }}></RestaurantsList></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });
  describe('When a restaurant is clicked', () => {
    test('Then it should navigate', () => {
      const navigation = {
        navigate: jest.fn()
      };

      const { getByTestId } = render(<Provider store={store}><RestaurantsList route={{ params: 'hi' }} navigation = {navigation}/></Provider>);
      fireEvent.press(getByTestId('asian'));

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
