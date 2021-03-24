import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, TouchableWithoutFeedback } from 'react-native';
import colors from '../../../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  tittlesContainer: {
    flexDirection: 'column',
    width: '100%',
    height: 600,
    justifyContent: 'space-around'
  },
  tittleCard: {
    width: '100%',
    height: '30%',
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 1.0
  },
  tittleImage: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  tittle: {
    width: 200,
    height: 40,
    position: 'absolute',
    top: -30,
    left: 0,
    alignItems: 'flex-start',
    justifyContent: 'center'

  },
  tittleText: {
    fontSize: 15
  },
  telephoneInput: {
    width: '60%',
    height: 40,
    paddingLeft: 10,
    backgroundColor: colors.green,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 20
  }
});
export default function Profile ({ navigation }:any) {
  return (

    <View style={styles.container}>
       <TextInput style={styles.telephoneInput} placeholder="Guarde o actualize su teléfono." keyboardType= "number-pad"></TextInput>
      <View style={styles.tittlesContainer}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('BookingsList', { list: 'bookings' })}>
        <View style={styles.tittleCard}>
          <ImageBackground style={styles.tittleImage} source={{ uri: 'https://trello-attachments.s3.amazonaws.com/6041f773bf2ba60154c38447/1200x800/b5d5a43ad062677a3ba031d5b8adc753/Booking.jpg' }}>
            <View style={styles.tittle}><Text style={styles.tittleText}>Gestione sus reservas</Text></View>
          </ImageBackground>
        </View>
         </TouchableWithoutFeedback>
         <TouchableWithoutFeedback onPress={() => navigation.navigate('BookingsList', { list: 'invitations' })}>
         <View style={styles.tittleCard}>
          <ImageBackground style={styles.tittleImage} source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5ffc5f162c16556900cb7618/6041f773bf2ba60154c38447/a9bbfc25545b7a55eb91debdec31b04f/invitations.jpg' }}>
            <View style={styles.tittle}><Text style={styles.tittleText}>Gestione sus invitaciones</Text></View>
          </ImageBackground>
        </View>
        </TouchableWithoutFeedback>
         <View style={styles.tittleCard}>
          <ImageBackground style={styles.tittleImage} source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5ffc5f162c16556900cb7618/6041f773bf2ba60154c38447/fddd57c653edbcce55e75edac1033811/allergies.jpg' }}>
            <View style={styles.tittle}><Text style={styles.tittleText}>Gestione sus alergias</Text></View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}
