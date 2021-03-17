import { getIngredients } from './ingredientActions';
import axios from 'axios';
import ingredientActionTypes from './ingredientActionsTypes';

jest.mock('axios');

describe('Given a getIngredients function', () => {
  describe('When invoked', () => {
    test('It should invoke dispatch with an action type: GET_INGREDIENTS and data: []', async () => {
      const data = { data: [] };
      axios.get = jest.fn().mockReturnValueOnce(data);
      const dispatch = jest.fn();

      const dispatcherfn = getIngredients();
      await dispatcherfn(dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: ingredientActionTypes.GET_INGREDIENTS, data: [] });
    });
  });
});
