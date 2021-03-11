import {
  filterSearchBar,
  loadCategories,
  loadRestaurants,
  getCategoryRestaurants
} from './restaurantAction';
import restaurantActionTypes from './restaurantActionTypes';
import axios from 'axios';

jest.mock('axios');

describe('Given a load categories function', () => {
  it('Should invoke dispatch with an object with type: restaurantActionTypes.LOAD_CATEGORIES', async () => {
    axios.get = jest.fn().mockReturnValueOnce({ data: ['asian', 'catalan'] });

    const action = {
      type: restaurantActionTypes.LOAD_CATEGORIES,
      categories: ['asian', 'catalan']
    };

    const dispatch = jest.fn();
    const actionCreator = loadCategories();
    await actionCreator(dispatch);

    expect(dispatch).toHaveBeenCalledWith(action);
  });
});
describe('Given  a filterCategories function when invoked with categories and hi', () => {
  it('Should return an action with type FILTER_CATEGORIES and value hi', () => {
    const action = {
      type: restaurantActionTypes.FILTER_CATEGORIES,
      value: 'hi'
    };
    const result = filterSearchBar('hi', 'categories');

    expect(result).toEqual(action);
  });
});
describe('Given  a filterSearchBar function when invoked with restaurants and hi', () => {
  it('Should return an action with type FILTER_RESTAURANTS and value hi', () => {
    const action = {
      type: restaurantActionTypes.FILTER_RESTAURANTS,
      value: 'hi'
    };
    const result = filterSearchBar('hi', 'restaurants');

    expect(result).toEqual(action);
  });
});
describe('Given a function loadRestaurantActions when invoked', () => {
  it('Should call dispatch with an action with type LOAD_RESTAURANTS', async () => {
    axios.get = jest.fn().mockReturnValueOnce({ data: ['asian', 'catalan'] });

    const action = {
      type: restaurantActionTypes.LOAD_RESTAURANTS,
      restaurants: ['asian', 'catalan']
    };

    const dispatch = jest.fn();
    const actionCreator = loadRestaurants();
    await actionCreator(dispatch);

    expect(dispatch).toHaveBeenCalledWith(action);
  });
});
describe('Given a function getCategoryRestaurants when invoked with params "mediterranean"', () => {
  it('Should return an action with type GET_CATEGORY_RESTAURANTS and category: mediterranean', () => {
    const action = {
      type: restaurantActionTypes.GET_CATEGORY_RESTAURANTS,
      category: 'mediterranean'
    };
    const output = getCategoryRestaurants('mediterranean');
    expect(output).toEqual(action);
  });
});
