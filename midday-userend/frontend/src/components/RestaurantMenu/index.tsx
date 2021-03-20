import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import colors from '../../../colors';

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    width: '100%',
    padding: 20

  },
  picker: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    marginBottom: 10
  },
  tittle: {
    width: '20%',
    height: '100%',
    borderColor: colors.green,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 15
  },
  selectedTittle: {
    width: '20%',
    height: '100%',
    borderColor: colors.green,
    backgroundColor: colors.green,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 15
  },
  list: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 0
  },
  listItem: {
    width: '100%',
    borderColor: colors.green,
    borderWidth: 1,
    height: 40,
    paddingLeft: 10,
    justifyContent: 'center',
    marginBottom: 10
  }

});

function RestaurantMenu ({ selectedRestaurant }:{selectedRestaurant: any}) {
  const [selectedType, setSelectedType] = React.useState('firstCourse');
  const [selectedTitle, setSelectedTitle] = React.useState(1);
  console.log('hi', selectedRestaurant.menus[0]);
  return (
   <View style = {styles.menuContainer}>
     <Text>Elige tu menú.</Text>
    <View style = {styles.picker}>

    <View style = {selectedTitle === 1 ? styles.selectedTittle : styles.tittle}>
      <TouchableWithoutFeedback onPress={() => { setSelectedType('firstCourse'); setSelectedTitle(1); }}>
        <Text>Primeros</Text>
      </TouchableWithoutFeedback>
    </View>
    <View style = {selectedTitle === 2 ? styles.selectedTittle : styles.tittle}>
      <TouchableWithoutFeedback onPress={() => { setSelectedType('secondCourse'); setSelectedTitle(2); }}>
        <Text>Segundos</Text>
      </TouchableWithoutFeedback>
    </View>
    <View style = {selectedTitle === 3 ? styles.selectedTittle : styles.tittle}>
      <TouchableWithoutFeedback onPress={() => { setSelectedType('dessert'); setSelectedTitle(3); }}>
        <Text>Postres</Text>
      </TouchableWithoutFeedback>
    </View>

    </View>
    <View style = {styles.list}>
     {selectedRestaurant.menus[0][selectedType].map((item) =>
    <TouchableWithoutFeedback key={item.name}><View style = {styles.listItem}><Text >{item.name}</Text></View></TouchableWithoutFeedback>
     )}
     </View>
    </View>
  );
}

function mapStateToProps ({ restaurants: { selectedRestaurant } }:any) {
  return { selectedRestaurant };
}

export default connect(mapStateToProps)(RestaurantMenu);
