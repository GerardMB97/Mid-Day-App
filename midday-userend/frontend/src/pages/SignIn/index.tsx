import colors from '../../../colors';
import React, { useEffect } from 'react';
import { ImageBackground, View, StyleSheet, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import { Navigation } from '../../models';
import { bindActionCreators, Dispatch } from 'redux';
import { signIn } from '../../redux/actions/userActions/userActions';
import Modal from '../../components/Modal';
import modal from '../../constants/modalText';
import { connect } from 'react-redux';

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
  },
  modal: {
    position: 'absolute',
    top: 350,
    zIndex: 2
  }
});
function SignIn ({ navigation, user, actions }:{navigation:Navigation, user: any, actions: any}) {
  const [email, setEmail] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const [wrongUser, setWrongUser] = React.useState(false);

  const handleModal = (setter: Function) => {
    setter(true);
    setTimeout(() => { setter(false); }, 4000);
  };
  useEffect(() => {
    if (user.status === 1) {
      handleModal(setWrongUser);
    } else if (user.status === 2) {
      navigation.navigate('LandingPage');
    }
    console.log(user.status);
  }, [user]);
  return (
    <ImageBackground style={styles.image} source={{ uri: 'https://trello-attachments.s3.amazonaws.com/6041f773bf2ba60154c38447/417x626/b5a3b5bc578c8c8a9603c72b18f9670e/comida-ingredientes_1220-4884.jpg' }}>
      <View style={styles.container}>
        <Image style={styles.logo} source = {{ uri: 'https://trello-attachments.s3.amazonaws.com/6041f773bf2ba60154c38447/886x624/909520ea82dfc7447a5fe02c2583c808/logo_blanco2_%282%29.png' }}></Image>
        <TextInput value={email} onChangeText={text => setEmail(text)} style={styles.input} placeholder="Introduzca su correo"></TextInput>
        {wrongUser && <View style={styles.modal}><Modal modalText={modal.wrongUser} ></Modal></View>}
        <TextInput secureTextEntry={true} value={pwd} onChangeText={text => setPwd(text)} style={styles.input} placeholder="Introduzca su contraseña"></TextInput>
        <TouchableOpacity onPress={() => { actions.signIn(email, pwd); }} style={styles.button} ><Text>Sign In</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('SignUp'); }}><Text style={styles.text}>Todaviá no estás registrado? Pincha aquí.</Text></TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

function mapStateToProps ({ user }:{user:any}) {
  return { user };
}

function mapDispatchToProps (dispatch: Dispatch) {
  return { actions: bindActionCreators({ signIn }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
