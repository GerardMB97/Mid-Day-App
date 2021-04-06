export {};
const bookingController = require('./index');
const Booking = require('../../Models/bookingModel');

jest.mock('../../Models/bookingModel');

describe('Given a function createNewBooking', () => {
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
  describe('When invoked ', () => {
    test('Then it should call res.status with 200 if there are no errrors', async () => {
      await bookingController.createNewBooking(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
