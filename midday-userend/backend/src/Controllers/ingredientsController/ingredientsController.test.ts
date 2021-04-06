const ingredientsController = require('.');
const Ingredient = require('../../Models/ingredientModel');

jest.mock('../../Models/ingredientModel');
describe('Given a function getIngredients', () => {
  let req:any, res:any;

  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
  });
  describe('When invoked with arguments req and res', () => {
    test('Then it should invoke res.json if there are no errors', async () => {
      Ingredient.find = jest.fn().mockReturnValueOnce([1, 2]);
      await ingredientsController.getIngredients(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When invoked with arguments req and res', () => {
    test('Then it should invoke res.status with 500 if there are errors', async () => {
      Ingredient.find = jest.fn().mockImplementationOnce(() => { throw new Error(); });
      await ingredientsController.getIngredients(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});
