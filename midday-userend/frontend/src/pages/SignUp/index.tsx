import colors from '../../../colors';
import React, { useEffect } from 'react';
import { ImageBackground, View, StyleSheet, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import { Navigation } from '../../models';
import Modal from '../../components/Modal';
import modalText from '../../constants/modalText';
import { signUp } from '../../redux/actions/userActions/userActions';
import { Dispatch, bindActionCreators } from 'redux';
import { handleModal, handleSignUp } from '../../utils';
import { connect } from 'react-redux';
;

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
  nameModal: {
    position: 'absolute',
    top: 350,
    zIndex: 3
  },
  emailModal: {
    position: 'absolute',
    top: 430,
    zIndex: 3
  },
  pwdModal: {
    position: 'absolute',
    top: 510,
    zIndex: 3
  },
  validPwdModal: {
    position: 'absolute',
    top: 590,
    zIndex: 3
  }
});
function SignUp ({ navigation, user, actions }:{navigation:Navigation, user:any, actions: any}) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const [repeatedPwd, setRepeatedPwd] = React.useState('');
  const [nameModal, setNameModal] = React.useState(false);
  const [emailModal, setEmailModal] = React.useState(false);
  const [pwdModal, setPwdModal] = React.useState(false);
  const [repeatedPwdModal, setRepeatedPwdModal] = React.useState(false);
  const [existantUserModal, setExistantUserModal] = React.useState(false);

  useEffect(() => {
    let timeout: any;
    if (user.status === 1) {
      timeout = handleModal(setExistantUserModal);
    } else if (user.status === 2) {
      navigation.navigate('LandingPage');
    }
    return () => { clearTimeout(timeout); };
  }, [user]);
  return (
    <ImageBackground style={styles.image} source={{ uri: 'https://trello-attachments.s3.amazonaws.com/6041f773bf2ba60154c38447/417x626/b5a3b5bc578c8c8a9603c72b18f9670e/comida-ingredientes_1220-4884.jpg' }}>
      <View style={styles.container}>
        <Image style={styles.logo} source = {{ uri: 'https://trello-attachments.s3.amazonaws.com/6041f773bf2ba60154c38447/886x624/909520ea82dfc7447a5fe02c2583c808/logo_blanco2_%282%29.png' }}></Image>

         <TextInput testID="nameInput" style={styles.input} placeholder="Introduzca su Nombre" value={name} onChangeText={(text) => { setName(text); }}></TextInput>
         {nameModal && <View style={styles.nameModal}><Modal modalText={modalText.wrongName}></Modal></View>}

        <TextInput testID="emailInput" style={styles.input} placeholder="Introduzca su correo"value={email} onChangeText={(text) => { setEmail(text); }}></TextInput>
        {emailModal && <View style={styles.emailModal}><Modal modalText={modalText.wrongMail}></Modal></View>}
        {existantUserModal && <View style={styles.emailModal}><Modal modalText={modalText.existantUser}></Modal></View>}

        <TextInput testID="pwdInput" secureTextEntry={true} style={styles.input} placeholder="Introduzca su contraseña" value={pwd} onChangeText={(text) => { setPwd(text); }}></TextInput>
        {pwdModal && <View style={styles.pwdModal}><Modal modalText={modalText.wrongPwd}></Modal></View>}

        <TextInput testID="repeatedPWdInput" secureTextEntry={true} style={styles.input} placeholder="Repita su contraseña" value={repeatedPwd} onChangeText={(text) => { setRepeatedPwd(text); }}></TextInput>
        {repeatedPwdModal && <View style={styles.validPwdModal}><Modal modalText={modalText.wrongPwdValidation}></Modal></View>}
        <TouchableOpacity testID="Register" onPress={() => { handleSignUp(name, setNameModal, email, setEmailModal, pwd, setPwdModal, repeatedPwd, setRepeatedPwdModal, actions.signUp, handleModal); }}style={styles.button} ><Text>Registrate</Text></TouchableOpacity>
        <TouchableOpacity testID="navigate" onPress={() => { navigation.navigate('SignIn'); }}><Text style={styles.text}>Ya estás registrado? Pincha aquí</Text></TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

function mapStateToProps ({ user }: {user: any}) {
  return { user };
}

function mapDispatchToProps (dispatch: Dispatch) {
  return { actions: bindActionCreators({ signUp }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
