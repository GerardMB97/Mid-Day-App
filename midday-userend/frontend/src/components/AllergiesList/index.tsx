import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import Icon from 'react-native-vector-icons/Ionicons';

const items = [
  // name key is must. It is to show the text in front
  { id: 1, name: 'angellist' },
  { id: 2, name: 'codepen' },
  { id: 3, name: 'envelope' },
  { id: 4, name: 'etsy' },
  { id: 5, name: 'facebook' },
  { id: 6, name: 'foursquare' },
  { id: 7, name: 'github-alt' },
  { id: 8, name: 'github' },
  { id: 9, name: 'gitlab' },
  { id: 10, name: 'instagram' }
];

const styles = StyleSheet.create({
  listTitle: {
    position: 'relative',
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  titleText: {
    fontSize: 20
  },
  list: {
    height: 300,
    overflow: 'hidden',
    flexGrow: 0
  },
  closedArrow: {
    fontSize: 25,
    position: 'absolute',
    left: '100%',
    transform: [{ rotate: '90deg' }]
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  allergyIcon: {
    fontSize: 25
  }
});
export default function AllergiesList ({ ingredients }) {
  return (
    <View>
      <View style={styles.listTitle}>
        <Text style={styles.titleText}>Seleccione sus alergias</Text>
        <Icon style={styles.closedArrow} name="caret-forward-outline"></Icon>
      </View>
      <View style={styles.list}>
      <FlatList

        data ={ingredients}
        keyExtractor = {(item => item.category)}
        renderItem={({ item }) =>
        <View style={styles.listItem}>
        <Text>{item.category}</Text>
        {item.isAllergic ? <Icon style = {styles.allergyIcon} name="sad-outline"></Icon> : <Icon style = {styles.allergyIcon} name="happy-outline"></Icon>}

        </View>

       }> </FlatList>
       </View>
    </View>

  );
}
