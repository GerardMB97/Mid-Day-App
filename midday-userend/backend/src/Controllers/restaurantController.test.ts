const restaurantController = require('./restaurantController');
const Categories = require('../Models/categoryModel');
const Restaurant = require('../Models/restaurantModel');
require('../Models/categoryModel');

jest.mock('../Models/categoryModel');
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
  describe('getCategories', () => {
    test('Should invoke res.json if there is no error', async () => {
      Categories.find.mockReturnValueOnce({});
      await restaurantController.getCategories(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Should call res.status with argument 500 if there is an error', () => {
      Categories.find.mockImplementationOnce(() => { throw new Error(); });
      restaurantController.getCategories(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
  describe('Given a getRestaurants method', () => {
    test('Then Should invoke', async () => {
      Restaurant.find.mockReturnValueOnce({ populate: jest.fn() });
      await restaurantController.getRestaurants(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Should call res.status with argument 500 if there is an error', () => {
      Restaurant.find.mockImplementationOnce(() => { throw new Error(); });
      restaurantController.getRestaurants(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});
