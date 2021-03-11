import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import colors from '../../../colors';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    borderColor: colors.green,
    borderWidth: 1,
    borderStyle: 'solid',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center'
  }
});
export default function NotFound ({ text }:{text:string}) {
  return <View style ={styles.container}><Text>{text}</Text></View>;
}
