import React from 'react';
import SearchBar from '.';
import { render, waitFor, fireEvent } from 'react-native-testing-library';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/restaurantActions/restaurantAction';

jest.mock('../../redux/actions/restaurantActions/restaurantAction');
jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');

jest.spyOn(actions, 'filterSearchBar').mockReturnValueOnce({ type: '' });

const mockStore = configureStore();
const store = mockStore({});

describe('Given a component SearchBar', () => {
  test('Then it should render correctly', () => {
    const rendered = render(
      <Provider store = {store}>
      <SearchBar
      inputPlaceholder ='hello'
      setInputValue = {jest.fn()}
      inputValue = ''
      action = {jest.fn()}
      ></SearchBar>
      </Provider>
    );
    expect(rendered).toMatchSnapshot();
  });
  describe('When input Value changes', () => {
    test('Then action should be invoked', async () => {
      const tree = render(
      <Provider store = {store}>
       <SearchBar
      inputPlaceholder ='hello'
      setInputValue = {() => { return null; }}
      inputValue = ''
      action = 'categories'
      ></SearchBar>
      </Provider>
      );
      const input = tree.getByTestId('searchbar');
      fireEvent.changeText(input, { text: 'hello' });
      await waitFor(() => { expect(actions.filterSearchBar).toHaveBeenCalled(); }, { timeout: 360 });
    });
  });
});
