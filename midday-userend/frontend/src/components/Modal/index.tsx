import colors from '../../../colors';
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    position: 'relative'
  },
  container: {
    width: 240,
    height: 50,
    backgroundColor: colors.alert,
    borderRadius: 10,
    padding: 5
  },
  triangle: {
    width: 30,
    height: 30,
    transform: [{ rotate: '45deg' }],
    backgroundColor: colors.alert,
    position: 'absolute',
    left: 20,
    top: -5
  }
});

export default function Modal ({ modalText }:{modalText:string}) {
  return (
    <View>
      <View style={styles.triangle}/>
      <Text style={styles.container}>{modalText}</Text>
    </View>
  );
}
