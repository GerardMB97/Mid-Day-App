import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput, View, StyleSheet } from 'react-native';
import colors from '../../../colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20
  },
  input: {
    width: '100%',
    height: 60,
    backgroundColor: colors.green,
    justifyContent: 'center',
    paddingLeft: 40,
    marginBottom: 20,
    borderRadius: 10
  },
  search: {
    fontSize: 25,
    color: 'black',
    position: 'absolute',
    left: '10%',
    top: '20%'
  }
});

export default function SearchBar ({ inputPlaceholder, setInputValue, inputValue, action }: {inputPlaceholder: string, setInputValue:any, inputValue:string, action:any}) {
  return (
    <View style = {styles.container}>
     <TextInput
      style = {styles.input}
      placeholder={inputPlaceholder}
      value={inputValue}
      onChangeText={(text) => { setInputValue(text); action(text); }}>
      </TextInput>
      <Icon style={styles.search} name= "search-outline"></Icon>
      </View>);
};
