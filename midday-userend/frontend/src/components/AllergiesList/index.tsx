import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { bindActionCreators, Dispatch } from 'redux';
import { updateAllergies } from '../../redux/actions/ingredientActions/ingredientActions';
import { updateUserAllergies } from '../../redux/actions/userActions/userActions';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  listTitle: {
    position: 'relative',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 20
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
    color: 'green',
    fontSize: 25

  },
  allergyIconSelected: {
    color: 'red',
    fontSize: 25
  },
  selected: {
    color: 'red',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
function AllergiesList ({ ingredients, actions }:any) {
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
        <TouchableWithoutFeedback onPress={() => { actions.updateAllergies(item.ingredient); actions.updateUserAllergies(item.ingredient); }}>
        <View style={item.isAllergic ? styles.selected : styles.listItem}>
        <Text>{item.ingredient}</Text>
        {item.isAllergic ? <Icon style = {styles.allergyIconSelected} name="sad-outline"></Icon> : <Icon style = {styles.allergyIcon} name="happy-outline"></Icon>}

        </View>
        </TouchableWithoutFeedback>
       }> </FlatList>
       </View>
    </View>

  );
}

function mapDispatchToProps (dispatch:Dispatch) {
  return { actions: bindActionCreators({ updateAllergies, updateUserAllergies }, dispatch) };
}

export default connect(undefined, mapDispatchToProps)(AllergiesList);
