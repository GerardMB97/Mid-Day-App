export const checkSelectedHour = (selectedHour:string, availableHours:string[]) => {
  return availableHours.findIndex((element) => element === selectedHour) !== -1;
};

export const handleConfirm = (boolean:boolean, setter: Function, callback: Function) => {
  if (boolean) {
    console.warn('Your booking is completed');
  } else {
    setter(true);
    setTimeout(callback, 3000);
  }
};

export const checkName = (name:string) => {
  return name.length >= 2;
};
