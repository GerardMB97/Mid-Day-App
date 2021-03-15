import colors from '../../../colors';
import React from 'react';
import { ImageBackground, View, StyleSheet, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import { Navigation } from '../../models';
import Modal from '../../components/Modal';

const styles = StyleSheet.create({
  image: {
    flex: 1
  },
  container: {
    marginTop: 100,
    width: '100%',
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    width: 400,
    height: 250
  },
  input: {
    width: 250,
    height: 40,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
    marginTop: 40

  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 5,
    backgroundColor: colors.green,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  text: {
    color: 'white'
  }
});
export default function SignIn ({ navigation }:{navigation:Navigation}) {
  return (
    <ImageBackground style={styles.image} source={{ uri: 'https://trello-attachments.s3.amazonaws.com/6041f773bf2ba60154c38447/417x626/b5a3b5bc578c8c8a9603c72b18f9670e/comida-ingredientes_1220-4884.jpg' }}>
      <View style={styles.container}>
        <Image style={styles.logo} source = {{ uri: 'https://trello-attachments.s3.amazonaws.com/6041f773bf2ba60154c38447/886x624/909520ea82dfc7447a5fe02c2583c808/logo_blanco2_%282%29.png' }}></Image>
         <TextInput style={styles.input} placeholder="Introduzca su Nombre"></TextInput>
        <TextInput style={styles.input} placeholder="Introduzca su correo"></TextInput>
        <TextInput secureTextEntry={true} style={styles.input} placeholder="Introduzca su contraseña"></TextInput>
        <TextInput secureTextEntry={true} style={styles.input} placeholder="Repita su contraseña"></TextInput>
        <TouchableOpacity style={styles.button} ><Text>Sign In</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('SignIn'); }}><Text style={styles.text}>Ya estás registrado? Pincha aquí</Text></TouchableOpacity>
        <Modal></Modal>
      </View>
    </ImageBackground>
  );
}
