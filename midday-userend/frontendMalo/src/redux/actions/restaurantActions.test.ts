import { loadCategories } from './restaurantAction';
import restaurantActionTypes from './restaurantActionTypes';
import axios from 'axios';

jest.mock('axios');

describe('Given a load categories function', () => {
  it('Should invoke dispatch with an object with type: restaurantActionTypes.LOAD_CATEGORIES', async () => {
    axios.get = jest.fn().mockReturnValueOnce(['asian', 'catalan']);

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
