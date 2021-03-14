import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import * as actions from '../../redux/actions/restaurantAction';
import RestaurantDetail from '.';
import { getSelectedRestaurant } from '../../redux/actions/restaurantAction';

jest.mock('../../redux/actions/restaurantAction');
jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');
jest.mock('react-native-calendars', () => 'Calendar');
jest.mock('react-native-modal-datetime-picker', () => 'TimePicker');

describe('Given a component Restaurant Detail', () => {
  const mockStore = configureStore();
  const store = mockStore({ restaurants: { selectedRestaurant: { category: {} } }, route: { params: { _id: 15 } } });

  jest.spyOn(actions, 'getSelectedRestaurant').mockReturnValue({ type: '' });
  test('Then it should render correctly', () => {
    const rendered = render(<Provider store={store}><RestaurantDetail route={{ params: 15 }}></RestaurantDetail></Provider>);

    expect(rendered).toMatchSnapshot();
  });
  describe('When buton with testId calendarUnactive is pressed', () => {
    test('Then it should render correctly', () => {
      const rendered = render(<Provider store={store}><RestaurantDetail route={{ params: 15 }}></RestaurantDetail></Provider>);
      const unactiveCalendar = rendered.getByTestId('calendarUnactive');
      fireEvent.press(unactiveCalendar);

      expect(rendered).toMatchSnapshot();
    });
  });
  describe('When buton with testId calendar is pressed', () => {
    test('Then it should render correctly', () => {
      const rendered = render(<Provider store={store}><RestaurantDetail route={{ params: 15 }}></RestaurantDetail></Provider>);
      const activeCalendar = rendered.getByTestId('calendar');
      fireEvent.press(activeCalendar);

      expect(rendered).toMatchSnapshot();
    });
  });
});
