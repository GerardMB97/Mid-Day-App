export {};
const bookingController = require('./index');
const Restaurant = require('../../Models/restaurantModel');

jest.mock('../../Models/restaurantModel');

describe('Given a function createBooking', () => {
  let req: any;
  let res: any;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
    req = {
      params: {}
    };
  });
  describe('When invoked it should call res.json', () => {
    test('Then it should call res.json', async () => {
      Restaurant.findById = jest.fn().mockResolvedValueOnce({ name: 'hello' });
      Restaurant.findByIdAndUpdate = jest.fn().mockResolvedValueOnce({ name: 'hello' });
      await bookingController.createBooking(req, res);

      expect(res.status).toHaveBeenCalled();
    });
  });
});
