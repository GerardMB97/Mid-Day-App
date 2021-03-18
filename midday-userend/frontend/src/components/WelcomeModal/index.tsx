import React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import colors from '../../../colors';
import { blackLogo } from '../../constants/images';
import modal from '../../constants/modalText';
import AllergiesList from '../AllergiesList';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '10%',
    zIndex: 5,
    backgroundColor: colors.trasnparentGreen,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center'
  },
  logo: {
    width: '80%',
    height: 68,
    marginBottom: 40
  },
  close: {
    width: 25,
    height: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '-1%',
    left: '107%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    overflow: 'hidden'
  },
  text: {
    marginBottom: 40
  }
});

export default function WelcomeModal ({ ingredients }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback ><View style={styles.close}><Text>X</Text></View></TouchableWithoutFeedback>
      <Image style = {styles.logo} source={{ uri: blackLogo }}></Image>
      <Text style={styles.text}>{modal.welcomeText}</Text>
      <AllergiesList ingredients={ingredients}></AllergiesList>

    </View>
  );
}
