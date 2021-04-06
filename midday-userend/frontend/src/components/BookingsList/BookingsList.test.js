import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { fireEvent, render } from 'react-native-testing-library';
import * as userActions from '../../redux/actions/userActions/userActions';
import * as bookingActions from '../../redux/actions/bookingActions/bookingActions';
import * as restaurantActions from '../../redux/actions/restaurantActions/restaurantAction';
import BookingsList from '.';

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');
const mockSotre = configureStore();
const user = {
  invitations: [{ _id: '1234', people: [1, 2, 3], restaurant: { _id: '1234' } }],
  bookings: [{ _id: '1234', people: [1, 2], restaurant: { _id: '1234' } }]
};
const store = mockSotre({ user });

describe('Given a BookingsList component', () => {
  beforeEach(() => {
    jest.spyOn(userActions, 'deleteBooking').mockReturnValueOnce({ type: '' });
    jest.spyOn(restaurantActions, 'getSelectedRestaurant').mockReturnValueOnce({ type: '' });
    jest.spyOn(userActions, 'deleteInvitation').mockReturnValueOnce({ type: '' });
    jest.spyOn(bookingActions, 'getBooking').mockReturnValueOnce({ type: '' });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('When rendered with params.list = invitations', () => {
    test('Then it should match its snapshot', () => {
      const tree = render(<Provider store={store}><BookingsList route={{ params: { list: 'invitations' } }}></BookingsList></Provider>);
      expect(tree).toMatchSnapshot();
    });
  });
  describe('When rendered with params.list = bookings', () => {
    test('Then it should match its snapshot', () => {
      const tree = render(<Provider store={store}><BookingsList route={{ params: { list: 'bookings' } }}></BookingsList></Provider>);
      expect(tree).toMatchSnapshot();
    });
  });
  describe('When button with testID delete is pressed', () => {
    test('Then deleteBookingAction should be invoked', () => {
      const { getByTestId } = render(<Provider store={store}><BookingsList route={{ params: { list: 'bookings' } }}></BookingsList></Provider>);
      const button = getByTestId('delete');
      fireEvent.press(button);
      expect(userActions.deleteBooking).toHaveBeenCalled();
    });
  });
  describe('When button with testID delete is pressed', () => {
    const navigation = {
      navigate: jest.fn()
    };
    test('Then getBooking action should be invoked', () => {
      const { getByTestId } = render(<Provider store={store}><BookingsList navigation ={navigation} route={{ params: { list: 'bookings' } }}></BookingsList></Provider>);
      const button = getByTestId('settings');
      fireEvent.press(button);
      expect(bookingActions.getBooking).toHaveBeenCalled();
    });
  });
  describe('When button with testID deleteInvitation is pressed', () => {
    test('Then deleteInvitation action should be invoked', () => {
      const { getByTestId } = render(<Provider store={store}><BookingsList route={{ params: { list: 'invitations' } }}></BookingsList></Provider>);
      const button = getByTestId('delete invitation');
      fireEvent.press(button);
      expect(userActions.deleteInvitation).toHaveBeenCalled();
    });
  });
  describe('When button with testID edit is pressed', () => {
    const navigation = {
      navigate: jest.fn()
    };
    test('Then deleteIngetSelectedRestaurant action should be invoked', () => {
      const { getByTestId } = render(<Provider store={store}><BookingsList navigation = {navigation} route={{ params: { list: 'invitations' } }}></BookingsList></Provider>);
      const button = getByTestId('edit');
      fireEvent.press(button);
      expect(restaurantActions.getSelectedRestaurant).toHaveBeenCalled();
    });
  });
  describe('When list passed by params has no length', () => {
    const user = {
      invitations: [{ _id: '1234', people: [1, 2, 3], restaurant: { _id: '1234' } }],
      bookings: []
    };
    const store = mockSotre({ user });
    test('Then it should render a text saying no tienes reservas', () => {
      const tree = render(<Provider store={store}><BookingsList route={{ params: { list: 'bookings' } }}></BookingsList></Provider>);
      const noInvitations = tree.getByText('No tienes reservas');
      expect(noInvitations).toBeDefined();
    });
  });
});
