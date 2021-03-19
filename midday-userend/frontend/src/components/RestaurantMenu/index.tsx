import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';

import colors from '../../../colors';

const styles = StyleSheet.create({
  menuContainer: {
    width: '100%'
  },
  picker: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    marginBottom: 3
  },
  tittle: {
    width: '20%',
    height: '100%',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 15
  },
  list: {
    width: '100%',
    borderTopLeftRadius: 0,
    height: 200
  },
  listItem: {
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    paddingLeft: 10,
    justifyContent: 'center',
    marginBottom: 5
  }

});

export default function RestaurantMenu ({ selectedRestaurant }:{selectedRestaurant: any}) {
  console.log('hi', selectedRestaurant.menus[0]);
  return (
   <View style = {styles.menuContainer}>
     <Text>Elige tu menú.</Text>
    <View style = {styles.picker}>

    <View style = {styles.tittle}>
      <TouchableWithoutFeedback>
        <Text>Primeros</Text>
      </TouchableWithoutFeedback>
    </View>
    <View style = {styles.tittle}>
      <TouchableWithoutFeedback>
        <Text>Segundos</Text>
      </TouchableWithoutFeedback>
    </View>
    <View style = {styles.tittle}>
      <TouchableWithoutFeedback>
        <Text>Postres</Text>
      </TouchableWithoutFeedback>
    </View>

    </View>
    <ScrollView style = {styles.list}>
     {selectedRestaurant.menus[0].secondCourse.map((item) =>
    <TouchableWithoutFeedback key={item.name}><View style = {styles.listItem}><Text >{item.name}</Text></View></TouchableWithoutFeedback>
     )}
     </ScrollView>
    </View>
  );
}
