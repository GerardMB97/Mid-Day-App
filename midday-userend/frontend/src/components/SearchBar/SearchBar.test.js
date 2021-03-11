import React from 'react';
import SearchBar from '.';
import { fireEvent, render } from 'react-native-testing-library';
import { filterCategories } from '../../redux/actions/restaurantAction';

jest.mock('../../redux/actions/restaurantAction');
jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');

describe('Given a component SearchBar', () => {
  test('Then it should render correctly', () => {
    const rendered = render(
      <SearchBar
      inputPlaceholder ='hello'
      setInputValue = {jest.fn()}
      inputValue = ''
      action = {jest.fn()}
      ></SearchBar>
    );
    expect(rendered).toMatchSnapshot();
  });
  describe('When input Value changes', () => {
    test('Then action should be invoked', () => {
      const tree = render(
       <SearchBar
      inputPlaceholder ='hello'
      setInputValue = {() => {}}
      inputValue = ''
      action = {filterCategories}
      ></SearchBar>
      );

      const textInput = tree.getByPlaceholder('hello');
      fireEvent.changeText(textInput, 'asiatica');

      expect(filterCategories).toHaveBeenCalled();
    });
  });
});
