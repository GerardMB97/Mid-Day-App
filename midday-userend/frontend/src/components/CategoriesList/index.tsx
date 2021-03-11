import React, { useEffect } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  StyleSheet,
  Text,
  FlatList,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import colors from '../../../colors';
import { loadCategories, filterCategories } from '../../redux/actions/restaurantAction';
import { Category } from '../../models';

import SearchBar from '../SearchBar';
import NotFound from '../NotFound';

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
  },
  nav: {
    width: '100%',
    height: 150
  }
});

function CategoriesList ({ categories, actions, navigation }:any) {
  const [inputValue, setInputValue] = React.useState('');

  useEffect(() => {
    if (!categories.allCategories.length) { actions.loadCategories(); }
  }, []);

  return (
    <View style = {styles.container}>
      <SearchBar inputValue={inputValue}
       setInputValue={setInputValue}
       inputPlaceholder='Tipo de menu o restaurante'
       action = {actions.filterCategories}
       ></SearchBar>
      <Text style = {styles.title}>¿Qué Menú te apetece hoy?</Text>
      <SafeAreaView style = {styles.listContainer}>
        {inputValue.length && !categories.filteredCategories.length
          ? <NotFound text="No hemos encontrado tu categoria"/>
          : <FlatList
        style = {styles.list}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={2}
        data ={inputValue.length ? categories.filteredCategories : categories.allCategories}
        keyExtractor = {(item => item.name)}
        renderItem={({ item }) =>
          <View style = {styles.listElement} >

            <ImageBackground source= {{ uri: item.image }} style = {styles.image} >
              <TouchableOpacity testID={item.name} onPress={() => navigation.navigate('CategoriesDetail')} style = {styles.nav}>
                <View style={styles.nameContainer}>
                <Text>{item.name}</Text>
                </View>
                </TouchableOpacity>
            </ImageBackground>

          </View>}
      >
      </FlatList>
        }

      </SafeAreaView>
    </View>

  );
}

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
