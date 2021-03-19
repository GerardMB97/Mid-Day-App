import axios from 'axios';
import { updateAllergiesRoute } from '../constants/dataBase';

export const checkSelectedHour = (selectedHour:string, availableHours:string[]) => {
  return availableHours.findIndex((element) => element === selectedHour) !== -1;
};

export const handleConfirm = (boolean:boolean, setter: Function, callback: Function) => {
  if (boolean) {
    return null;
  } else {
    setter(true);
    setTimeout(callback, 3000);
  }
};

export const checkName = (name:string) => {
  return name.length >= 2;
};

export const checkEmail = (email:string) => {
  const validationRegExp = /^\S+@\S+\.\S+$/;
  return validationRegExp.test(email);
};

export const checkPassword = (pwd: string) => {
  const validationPwdRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return validationPwdRegExp.test(pwd);
};

export const checkRepeatedPwd = (pwd: string, repeatedPwd:string) => {
  return pwd === repeatedPwd;
};

export const handleModal = (setter: Function) => {
  setter(true);
  return setTimeout(() => { setter(false); }, 4000);
};

export const handleSignUp = (name:string,
  setNameModal:Function,
  email: string,
  setEmailModal:Function,
  pwd: string,
  setPwdModal:Function,
  repeatedPwd: string,
  setRepeatedPwdModal:Function,
  action:Function,
  handleModal:Function) => {
  if (!checkName(name)) {
    handleModal(setNameModal);
  } else if (!checkEmail(email)) {
    handleModal(setEmailModal);
  } else if (!checkPassword(pwd)) {
    handleModal(setPwdModal);
  } else if (!checkRepeatedPwd(pwd, repeatedPwd)) {
    handleModal(setRepeatedPwdModal);
  } else action(name, email, pwd);
};

export const updateAllergiesDB = ({ _id, allergies }:any) => {
  axios.put(updateAllergiesRoute, { _id, allergies });
};
