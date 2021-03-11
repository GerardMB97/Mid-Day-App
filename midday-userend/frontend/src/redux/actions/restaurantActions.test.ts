import { filterCategories, loadCategories, loadRestaurants } from './restaurantAction';
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
describe('Given  a filterCategories function when invoked with hi', () => {
  it('Should return an action with type FILTER_CATEGORIES and value hi', () => {
    const action = {
      type: restaurantActionTypes.FILTER_CATEGORIES,
      value: 'hi'
    };
    const result = filterCategories('hi');

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
