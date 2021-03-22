import axios from 'axios';
import { updateAllergiesRoute, newBookingRoute, bookingToRestRoute, bookingToUserRoute, findUserRoute } from '../constants/dataBase';

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

export const createBooking = async (date, hour, bookingAdmin, pax, people, restaurantId) => {
  const booking = {
    date,
    hour,
    bookingAdmin,
    pax,
    people

  };
  const { data: { _id } } = await axios.post(newBookingRoute, booking);

  const reqBody = {
    bookingId: _id,
    restaurantId

  };
  axios.put(bookingToRestRoute, reqBody);
  const userReqBody = {
    bookingId: _id,
    userId: bookingAdmin
  };
  axios.put(bookingToUserRoute, userReqBody);
};

export const getMonthName = (date: string):string => {
  const month = date.split('-')[1];
  console.log(month);
  switch (month) {
    case '01':
    case '1':
      return 'ENE';
    case '02':
    case '2':
      return 'FEB';
    case '03':
    case '3':
      return 'MAR';
    case '04':
    case '4':
      return 'ABR';
    case '05':
    case '5':
      return 'MAY';
    case '06':
    case '6':
      return 'JUN';
    case '07':
    case '7':
      return 'JUL';
    case '08':
    case '8':
      return 'AGO';
    case '09':
    case '9':
      return 'SEP';
    case '10':
      return 'OCT';
    case '11':
      return 'NOV';
    default:
      return 'DIC';
  }
};

export const getDay = (date: string) => {
  return date.split('-')[0];
};
