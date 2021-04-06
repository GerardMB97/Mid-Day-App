const userController = require('.');
const User = require('../../Models/userModel');

jest.mock('../../Models/userModel');

describe('Given a userController', () => {
  let req: any, res:any;
  beforeEach(() => {
    res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('Given an updateAllergies function', () => {
    req = {
      body: {
        _id: '2345',
        allergies: []
      }
    };
    describe('When invoke with req and res', () => {
      test('It should call res.json if there are no errors', async () => {
        User.findByIdAndUpdate.mockReturnValueOnce({});
        await userController.updateAllergies(req, res);
        expect(res.json).toHaveBeenCalled();
      });
      test('It should call res.status 500 if there are errors', async () => {
        User.findByIdAndUpdate.mockImplementationOnce(() => { throw new Error(); });
        await userController.updateAllergies(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
  describe('Given an updateIsNew function', () => {
    describe('When invoke with req and res', () => {
      test('It should call res.json if there are no errors', async () => {
        User.findByIdAndUpdate.mockReturnValueOnce({});
        await userController.updateisNew(req, res);
        expect(res.json).toHaveBeenCalled();
      });
      test('It should call res.status with 500 if there are errors', async () => {
        User.findByIdAndUpdate.mockImplementationOnce(() => { throw new Error(); });
        await userController.updateisNew(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
  describe('Given an addBookingToUser function', () => {
    describe('When invoke with req and res', () => {
      test('It should call res.status to be invoked with 500 if there are errors', async () => {
        User.findById.mockReturnValueOnce({});
        User.findByIdAndUpdate.mockReturnValueOnce({ populate: jest.fn() });
        await userController.addBookingToUser(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
  describe('Given a findUser function', () => {
    describe('When invoke with req and res', () => {
      test('It should call res.status  with 500 if there are errors', async () => {
        req = { params: { email: 'gerard' } };
        await userController.findUser(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('It should call res.status  with 404 if it doesnt find a user', async () => {
        req = { params: { email: 'gerard' } };
        User.findOne.mockReturnValueOnce({ populate: jest.fn().mockReturnValueOnce(null) });
        await userController.findUser(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
      });
      test('It should call res.status  with 200 if it finds a user', async () => {
        req = { params: { email: 'gerard' } };
        User.findOne.mockReturnValueOnce({ populate: jest.fn().mockReturnValueOnce({}) });
        await userController.findUser(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
      });
    });
  });
  describe('Given an addInvitation function', () => {
    describe('When invoke with req and res', () => {
      test('It should call res.status to be invoked with 500 if there are errors', async () => {
        req = {
          body: {
            userId: '2345',
            bookingId: '123'
          }
        };
        User.findById.mockReturnValueOnce({});
        User.findByIdAndUpdate.mockReturnValueOnce({ populate: jest.fn() });
        await userController.addInvitation(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
  describe('Given a deleteInvitation function', () => {
    describe('When invoke with req and res', () => {
      test('It should call res.json if there are no errors', async () => {
        req = {
          body: {
            userId: '2345',
            invitationId: '123'
          }
        };
        User.findByIdAndUpdate.mockReturnValueOnce({ populate: jest.fn() });
        await userController.deleteInvitation(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
  });
});
