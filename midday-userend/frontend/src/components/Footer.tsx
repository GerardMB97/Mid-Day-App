import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors';

const styles = StyleSheet.create({
  footer: {
    height: 60,
    width: '100%',
    backgroundColor: colors.green,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  icons: {
    fontSize: 30
  }
});
export default function Footer () {
  return (
    <View style = {styles.footer}>
      <Icon style = {styles.icons} name="location-outline"></Icon>
      <Icon style = {styles.icons} name="heart-outline"></Icon>
      <Icon style = {styles.icons} name="person-outline"></Icon>
    </View>
  );
}
