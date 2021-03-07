const restaurantController = require('./restaurantController');
const Restaurant = require('../Models/restaurantModel');

jest.mock('../Models/restaurantModel');

describe('Given a restaurantController', () => {
  let req:any, res:any;

  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('getRestaurants', () => {
    test('Should invoke res.json if there is no error', async () => {
      Restaurant.find = jest.fn();
      Restaurant.find.mockReturnValueOnce(() => ({ populate: jest.fn() }));
      await restaurantController.getRestaurants(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
