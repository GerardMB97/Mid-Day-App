import { waitFor } from 'react-native-testing-library';
import {
  checkSelectedHour,
  handleConfirm,
  checkName,
  checkEmail,
  checkPassword,
  checkRepeatedPwd,
  handleModal
} from './index';

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
describe('Given a funcion checkName', () => {
  describe('When invoked with argument Xi', () => {
    test('Should return true', () => {
      expect(checkName('Xi')).toBe(true);
    });
  });
  describe('When invoked with argument X', () => {
    test('Should return false', () => {
      expect(checkName('X')).toBe(false);
    });
  });
});
describe('Given a function checkEmail', () => {
  describe('When invoked with an argument gerard@gmail.com', () => {
    test('Then it should return true', () => {
      expect(checkEmail('gerard@gmail.com')).toBe(true);
    });
  });
});
describe('Given a function checkEmail', () => {
  describe('When invoked with an argument gerard @gmail.com', () => {
    test('Then it should return false', () => {
      expect(checkEmail('gerard @gmail.com')).toBe(false);
    });
  });
});
describe('Given a function checkPassword', () => {
  describe('When invoked with argument "barcelona" ', () => {
    test('Then it should return false', () => {
      expect(checkPassword('barcelona')).toBe(false);
    });
  });
  describe('When invoked with argument "barcelona10" ', () => {
    test('Then it should return false', () => {
      expect(checkPassword('barcelona10')).toBe(false);
    });
  });
  describe('When invoked with argument "Barcelona10" ', () => {
    test('Then it should return false', () => {
      expect(checkPassword('Barcelona10')).toBe(true);
    });
  });
});
describe('Given a function checkRepeatedPwd', () => {
  describe('When invoked with arguments "hello", "hello', () => {
    test('Then it should return true', () => {
      expect(checkRepeatedPwd('hello', 'hello')).toBe(true);
    });
  });
  describe('When invoked with arguments "hello", "hi', () => {
    test('Then it should return true', () => {
      expect(checkRepeatedPwd('hello', 'hi')).toBe(false);
    });
  });
});
describe('Given a function handleModal', () => {
  describe('When invoked with a function', () => {
    test('Then it should call the setter 2 times', async () => {
      const setter = jest.fn();
      handleModal(setter);

      await waitFor(() => { expect(setter).toHaveBeenCalledTimes(2); }, { timeout: 4100 });
    });
  });
});
