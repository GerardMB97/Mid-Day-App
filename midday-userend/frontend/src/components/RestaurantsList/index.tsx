import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  View
} from 'react-native';
import { State } from '../../models/index';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

import { getCategoryRestaurants } from '../../redux/actions/restaurantAction';
import SearchBar from '../SearchBar';
import colors from '../../../colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20
  },
  list: {
    flexDirection: 'column',
    width: '90%'
  },
  listElement: {
    width: '100%',
    height: 150,
    borderRadius: 15,
    marginBottom: 15,
    borderColor: 'black',
    borderWidth: 1,
    overflow: 'hidden',
    position: 'relative'
  },
  nameContainer: {
    backgroundColor: colors.transparentGray,
    width: '100%',
    height: 60,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
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
  },
  badge: {
    borderRadius: 50,
    backgroundColor: colors.green,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  price: {
    fontSize: 12,
    color: 'black'
  }
});
function RestaurantsList ({ route, restaurants, actions, navigation }:any) {
  const [inputValue, setInputValue] = React.useState('');
  const { category } = route?.params;
  useEffect(() => {
    actions.getCategoryRestaurants(category);
  }, [category]);

  return (
    <View style={styles.container}>
    <SearchBar
    inputPlaceholder = 'A qué restaurante te apetece ir hoy?'
    setInputValue ={setInputValue}
    inputValue = {inputValue}
    action = 'restaurants'
    ></SearchBar>
    <FlatList
        style = {styles.list}
        numColumns={1}
        data ={inputValue.length ? restaurants.filteredRestaurants : restaurants.categoryRestaurants}
        keyExtractor = {(item => item.name)}
        renderItem={({ item }) =>
          <View style = {styles.listElement} >

            <ImageBackground source= {{ uri: item.image }} style = {styles.image} >
              <TouchableOpacity testID={item.name} style = {styles.nav} onPress={() => { navigation.navigate('RestaurantDetail', { _id: item._id }); }}>
                <View style={styles.nameContainer}>
                <Text>{item.name}</Text>
                <Text>{`${item.street}, ${item.number}`}</Text>
                <View style={styles.badge}>
                  <Text style={styles.price}>{item.menuprice} €</Text>
                </View>
                </View>
                </TouchableOpacity>
            </ImageBackground>

          </View>}
      >
      </FlatList>
      </View>
  );
}

function mapStateToProps ({ restaurants }:{restaurants:State['restaurants']}) {
  return { restaurants };
}

function mapDispatchToProps (dispatch: Dispatch<AnyAction>) {
  return { actions: bindActionCreators({ getCategoryRestaurants }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList);
