import categoriesReducer from './categoriesReducer';
import restaurantReducer from './restaurantReducer';
import restaurantActionTypes from '../actions/restaurantActionTypes';

describe('Given a categoriesReducer', () => {
  const categoriesState = { allCategories: [{ name: 'hi' }, { name: 'bye' }], filteredCategories: [] };
  describe('When invoked with an action with type LOAD_CATEGORIES and categories []', () => {
    test('Then it should return an object with allCategories:[] filteredCategories:[]', () => {
      const output = categoriesReducer(categoriesState, { type: restaurantActionTypes.LOAD_CATEGORIES, categories: [] });
      const newState = { allCategories: [], filteredCategories: [] };
      expect(output).toEqual(newState);
    });
  });
  describe('When invoked with an action with type FILTER_CATEGORIES and value "hi"', () => {
    test('Then it should return an object with allCategories:[] filteredCategories:[]', () => {
      const output = categoriesReducer(categoriesState, { type: restaurantActionTypes.FILTER_CATEGORIES, value: 'hi' });
      const newState = { allCategories: [{ name: 'hi' }, { name: 'bye' }], filteredCategories: [{ name: 'hi' }] };
      expect(output).toEqual(newState);
    });
  });
  describe('When invoked with an action with different type', () => {
    test('Then it should return same state', () => {
      const initialState = {
        allCategories: [],
        filteredCategories: []
      };
      const output = categoriesReducer(undefined, { type: 'other' });

      expect(output).toEqual(initialState);
    });
  });
});
describe('Given a restaurantReducer ', () => {
  const state = {
    allRestaurants: [{ category: { name: 'asian' } }],
    categoryRestaurants: [{ name: 'asian', _id: '1234' }],
    filteredRestaurants: [],
    selectedRestaurant: {
      category: {}
    }
  };
  describe('When invoked with an action with type LOAD_restaurants', () => {
    test('Then it should return an object equal to state plus allRestaurants: action.restaurants', () => {
      const action = { type: restaurantActionTypes.LOAD_RESTAURANTS, restaurants: [{ name: 'Can Gerard' }] };

      const expectedOutput = { ...state, allRestaurants: [...action.restaurants] };

      expect(restaurantReducer(state, action)).toEqual(expectedOutput);
    });
  });
  describe('When invoked with an action with type GET_CATEGORY_RESTAURANTS', () => {
    test('Then it should return an object equal to state plus allRestaurants: action.restaurants', () => {
      const action = { type: restaurantActionTypes.GET_CATEGORY_RESTAURANTS, category: 'asian' };

      const expectedOutput = { ...state, categoryRestaurants: [{ category: { name: 'asian' } }] };

      expect(restaurantReducer(state, action)).toEqual(expectedOutput);
    });
  });
  describe('When invoked with an action with type FILTER_RESTAURANTS', () => {
    test('Then it should return an object equal to state plus allRestaurants: action.restaurants', () => {
      const action = { type: restaurantActionTypes.FILTER_RESTAURANTS, value: 'asian' };

      const expectedOutput = { ...state, filteredRestaurants: [{ name: 'asian', _id: '1234' }] };

      expect(restaurantReducer(state, action)).toEqual(expectedOutput);
    });
  });
  describe('When invoked with an action with type GET_SELECTED_RESTAURANT', () => {
    test('Then it should return an object equal to state plus allRestaurants: action.restaurants', () => {
      const action = { type: restaurantActionTypes.GET_SELECTED_RESTAURANT, _id: '1234' };

      const expectedOutput = { ...state, selectedRestaurant: { name: 'asian', _id: '1234' } };

      expect(restaurantReducer(state, action)).toEqual(expectedOutput);
    });
  });
  describe('When invoked with an action with deifferent type', () => {
    test('Then it should return same state', () => {
      const action = { type: 'other' };
      const initialState = {
        allRestaurants: [],
        categoryRestaurants: [],
        filteredRestaurants: [],
        selectedRestaurant: {
          category: {}
        }
      };

      expect(restaurantReducer(undefined, action)).toEqual(initialState);
    });
  });
});
