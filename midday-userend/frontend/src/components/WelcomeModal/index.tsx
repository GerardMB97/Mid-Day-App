import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import colors from '../../../colors';
import { blackLogo } from '../../constants/images';
import modal from '../../constants/modalText';
import AllergiesList from '../AllergiesList';
import { updateIsnew, updateAllergiesDB } from '../../redux/actions/userActions/userActions';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '10%',
    zIndex: 5,
    backgroundColor: colors.alert,
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
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: colors.gray,
    marginTop: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function WelcomeModal ({ ingredients, user, actions }:any) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback ><View style={styles.close}><Text>X</Text></View></TouchableWithoutFeedback>
      <Image style = {styles.logo} source={{ uri: blackLogo }}></Image>
      <Text style={styles.text}>{modal.welcomeText}</Text>
      <AllergiesList ingredients={ingredients} ></AllergiesList>
      <TouchableOpacity onPress={() => { actions.updateIsnew(user); actions.updateAllergiesDB(user); }} style={styles.button}><Text>Guardar</Text></TouchableOpacity>

    </View>
  );
}

function mapDispatchToProps (dispatch:Dispatch) {
  return { actions: bindActionCreators({ updateIsnew, updateAllergiesDB }, dispatch) };
}

export default connect(undefined, mapDispatchToProps)(WelcomeModal);
