import { checkSelectedHour, handleConfirm } from './index';

describe('Given a function checkSelectedHour', () => {
  describe('When invoked with "12:00 and ["12:00"]', () => {
    test('Then it should return true', () => {
      const selectedHour = '12:00';
      const availableHours = ['12:00'];

      expect(checkSelectedHour(selectedHour, availableHours)).toBe(true);
    });
  });
  describe('When invoked with "12:30 and ["12:00"]', () => {
    test('Then it should return true', () => {
      const selectedHour = '12:30';
      const availableHours = ['12:00'];

      expect(checkSelectedHour(selectedHour, availableHours)).toBe(false);
    });
  });
});

describe('Given a function handleConfirm', () => {
  describe('When invoked with true and a jest fn ', () => {
    test('Then tes jest function should not be invoked', () => {
      const setter = jest.fn();
      const callback = jest.fn();

      handleConfirm(true, setter, callback);
      expect(setter).not.toHaveBeenCalled();
    });
  });
  describe('When invoked with false and a jest fn ', () => {
    test('Then tes jest function should not be invoked', () => {
      const setter = jest.fn();
      const callback = jest.fn();

      handleConfirm(false, setter, callback);
      expect(setter).toHaveBeenCalled();
    });
  });
});
