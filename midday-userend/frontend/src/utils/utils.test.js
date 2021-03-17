import { waitFor } from 'react-native-testing-library';
import {
  checkSelectedHour,
  handleConfirm,
  checkName,
  checkEmail,
  checkPassword,
  checkRepeatedPwd,
  handleModal,
  handleSignUp
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
describe('Given a function handleSignUp', () => {
  const setNameModal = jest.fn();
  const setEmailModal = jest.fn();
  const setPwdModal = jest.fn();
  const setRepeatedPwdModal = jest.fn();
  const action = jest.fn();
  const handleModal = jest.fn();

  const name = 'Gerard';
  const email = 'gerard@gmail.com';
  const pwd = 'Barcelona10';
  const repeatedPwd = 'Barcelona10';

  describe('When invoked with name:a ', () => {
    test('Then setNamemodal should be invoked setnameodal', () => {
      handleSignUp('a', setNameModal, email, setEmailModal, pwd, setPwdModal, repeatedPwd, setRepeatedPwdModal, action, handleModal);

      expect(handleModal).toHaveBeenCalledWith(setNameModal);
    });
  });
  describe('When invoked with email:a ', () => {
    test('Then setEmailmodal should be invoked setemailmodal', () => {
      handleSignUp(name, setNameModal, 'a', setEmailModal, pwd, setPwdModal, repeatedPwd, setRepeatedPwdModal, action, handleModal);

      expect(handleModal).toHaveBeenCalledWith(setEmailModal);
    });
  });
  describe('When invoked with pwd:a ', () => {
    test('Then setPwdmodal should be invoked with setpwdmodal', () => {
      handleSignUp(name, setNameModal, email, setEmailModal, 'a', setPwdModal, repeatedPwd, setRepeatedPwdModal, action, handleModal);

      expect(handleModal).toHaveBeenCalledWith(setPwdModal);
    });
  });
  describe('When invoked with repeatedpwd:a ', () => {
    test('Then setRepeatedPwdmodal should be invoked with setrepeatedpwdmodal', () => {
      handleSignUp(name, setNameModal, email, setEmailModal, pwd, setPwdModal, 'a', setRepeatedPwdModal, action, handleModal);

      expect(handleModal).toHaveBeenCalledWith(setRepeatedPwdModal);
    });
  });
  describe('When invoked with all inputs being valid', () => {
    test('Then action should be invoked with name, email and pwd', () => {
      handleSignUp(name, setNameModal, email, setEmailModal, pwd, setPwdModal, repeatedPwd, setRepeatedPwdModal, action, handleModal);

      expect(action).toHaveBeenCalledWith(name, email, pwd);
    });
  });
});
