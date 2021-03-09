import React, { useEffect, useState } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  TextInput,
  Text,
  FlatList,
  View,
  SafeAreaView,
  ImageBackground
} from 'react-native';
import colors from '../../colors';
import { loadCategories, filterCategories } from '../redux/actions/restaurantAction';
import { Category } from '../models';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
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
    paddingLeft: 60,
    marginBottom: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 25
  },
  listContainer: {
    flex: 1,
    width: '100%'
  },
  list: {
    flexDirection: 'column'
  },
  listElement: {
    width: '48%',
    height: 150,
    borderRadius: 15,
    marginBottom: 15,
    borderColor: 'black',
    borderWidth: 1,
    overflow: 'hidden'
  },
  nameContainer: {
    backgroundColor: colors.transparentGray,
    width: '100%',
    height: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  search: {
    fontSize: 25,
    color: 'black',
    position: 'absolute',
    left: '8%',
    top: '2%'
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0
  }
});
function CategoriesList ({ categories, actions }:any) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    actions.loadCategories();
  }, []);
  return (
    <View style = {styles.container}>
      <TextInput
      style = {styles.input}
      placeholder="Tipo de menú o restaurante"
      value={inputValue}
      onChangeText={(text) => { setInputValue(text); actions.filterCategories(text); }}>
      </TextInput>
      <Icon style={styles.search} name= "search-outline"></Icon>
      <Text style = {styles.title}>¿Qué Menú te apetece hoy?</Text>
      <SafeAreaView style = {styles.listContainer}>
      <FlatList
        style = {styles.list}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={2}
        data ={inputValue.length ? categories.filteredCategories : categories.allCategories}
        keyExtractor = {(item => item.name)}
        renderItem={({ item }) =>
          <View style = {styles.listElement} >
            <ImageBackground source= {{ uri: item.image }} style = {styles.image}>
              <View style = {styles.nameContainer}><Text>{item.name}</Text></View>
            </ImageBackground>
          </View>}
      >
      </FlatList>
      </SafeAreaView>
    </View>

  );
}

CategoriesList.propTypes = {
  categories: PropTypes.shape({
    allCategories: PropTypes.array.isRequired,
    filteredCategories: PropTypes.array.isRequired
  }).isRequired,
  actions: PropTypes.shape({
    loadCategories: PropTypes.func.isRequired,
    filterCategories: PropTypes.func.isRequired
  }).isRequired
};
interface destructuredSate{
  categories: Category[]
}
function mapStateToProps ({ categories }: destructuredSate) {
  return { categories };
}

function mapDispatchToProps (dispatch: Dispatch) {
  return { actions: bindActionCreators({ loadCategories, filterCategories }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
