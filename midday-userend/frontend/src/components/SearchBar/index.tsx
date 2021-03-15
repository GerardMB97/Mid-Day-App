import React from 'react';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput, View, StyleSheet } from 'react-native';
import colors from '../../../colors';
import { filterSearchBar } from '../../redux/actions/restaurantAction';
import { connect } from 'react-redux';

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

function SearchBar ({ inputPlaceholder, setInputValue, inputValue, action, actions }: {inputPlaceholder: string, setInputValue:any, inputValue:string, action:any, actions:any}) {
  return (
    <View style = {styles.container}>
     <TextInput
      style = {styles.input}
      placeholder={inputPlaceholder}
      value={inputValue}
      onChangeText={(text) => { setInputValue(text); actions.filterSearchBar(text, action); }}>
      </TextInput>
      <Icon style={styles.search} name= "search-outline"></Icon>
      </View>);
};

function mapDispatchToProps (dispatch: Dispatch<AnyAction>) {
  return { actions: bindActionCreators({ filterSearchBar }, dispatch) };
}

export default connect(null, mapDispatchToProps)(SearchBar);
