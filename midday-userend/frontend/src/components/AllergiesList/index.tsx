import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

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
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  headingText: {
    padding: 8
  }
});
export default function AllergiesList () {
  const [selectedAllergies, setSelectedAllergies] = React.useState([]);

  const onSelectedItemsChange = (selectedItems: any) => {
    setSelectedAllergies(selectedItems);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Multiple Select / Dropdown / Picker Example
          in React Native
        </Text>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedAllergies}
          selectText="Elija sus alérgenos"
          searchInputPlaceholderText="Buscar alérgenos"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#48d22b"
          submitButtonText="Listo"
        />
      </View>
    </SafeAreaView>
  );
}
