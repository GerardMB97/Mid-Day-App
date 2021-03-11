import { State } from '../../models';

const initialState: State = {
  categories: {
    allCategories: [],
    filteredCategories: []
  },
  restaurants: {
    allRestaurants: [],
    categoryRestaurants: [],
    filteredRestaurants: []
  }
};

export default initialState
;
