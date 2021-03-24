import { State } from '../../models';

const initialState: State = {
  categories: {
    allCategories: [],
    filteredCategories: []
  },
  restaurants: {
    allRestaurants: [],
    categoryRestaurants: [],
    filteredRestaurants: [],
    selectedRestaurant: {
      category: {}
    }
  },
  user: {
    name: undefined,
    email: undefined,
    password: undefined,
    allergies: [],
    foodTastes: [],
    _id: undefined,
    status: 0
  },
  ingredients: [],
  booking: {
    date: '',
    hour: '',
    bookingAdmin: '',
    pax: 1,
    people: []
  }
};
export default initialState
;
