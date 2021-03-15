import React, { useState } from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface DatePickerProps{
  selectedHour: string,
  setSelectedHour: Function
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 30
  }
});

const DatePicker = ({ selectedHour, setSelectedHour }:DatePickerProps) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleConfirm = (date : Date) => {
    const hour = date.getHours().toString();
    const minutes = date.getMinutes().toString().split('');
    const modifiedMinutes = minutes[0] + '0';
    const selectedHour = `${hour}:${modifiedMinutes}`;

    return selectedHour;
  };

  return (
      <TouchableWithoutFeedback testID="show" onPress={() => setDatePickerVisibility(true)} >
        <View>
        <Icon name="time-outline" style={styles.icon}></Icon>
      <DateTimePickerModal
        testID="picker"
        isVisible={isDatePickerVisible}
        minuteInterval= {30}
        headerTextIOS= 'Estamos disponibles de 12:00 a 16:00 '
        mode="time"
        locale="en_GB"
        onConfirm={(date) => setSelectedHour(handleConfirm(date))}
        onCancel={() => setDatePickerVisibility(false)}
      />
      </View>
      </TouchableWithoutFeedback>

  );
};

export default DatePicker;
