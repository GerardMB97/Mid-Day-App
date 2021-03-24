import { getIngredients, updateAllergies } from './ingredientActions';
import axios from 'axios';
import ingredientActionTypes from './ingredientActionsTypes';

jest.mock('axios');

describe('Given a getIngredients function', () => {
  describe('When invoked', () => {
    test('It should invoke dispatch with an action type: GET_INGREDIENTS and data: []', async () => {
      const data = { data: [] };
      axios.get = jest.fn().mockReturnValueOnce(data);
      const dispatch = jest.fn();

      const dispatcherfn = getIngredients('1234');
      await dispatcherfn(dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: ingredientActionTypes.GET_INGREDIENTS, data: [], user: '1234' });
    });
  });
});

describe('Given an updateAllergies function', () => {
  describe('When invoked with "carrot"', () => {
    test('Then it should return an action with type UPDATE_ALLERGY and ingredient: carrot', () => {
      const output = updateAllergies('carrot');
      expect(output).toEqual({ type: ingredientActionTypes.UPDATE_ALLERGY, ingredient: 'carrot' });
    });
  });
});
