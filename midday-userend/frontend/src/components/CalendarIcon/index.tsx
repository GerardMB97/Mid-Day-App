import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  calendar: {
    width: 40,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  monthContainer: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingTop: '5%',
    width: '100%',
    height: '40%',
    backgroundColor: '#B60D10',
    alignItems: 'center'

  },
  dayText: {
    marginBottom: '10%',
    fontSize: 20
  },
  whiteText: {
    color: 'white'
  }
});
interface CalendarIconProps {
  month: string,
  day: string
}

export default function CalendarIcon ({ month, day }:CalendarIconProps) {
  return (
    <View style ={styles.calendar}>
      <View style={styles.monthContainer}><Text style={styles.whiteText}>{month}</Text></View>
      <Text style={styles.dayText}>{day}</Text>
    </View>
  );
}
