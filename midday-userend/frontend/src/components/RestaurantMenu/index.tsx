import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../../colors';
import { bindActionCreators, Dispatch } from 'redux';
import { saveMenuSelection, resetBooking } from '../../redux/actions/bookingActions/bookingActions';

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
    height: 70,
    paddingLeft: 10,
    justifyContent: 'center',
    marginBottom: 10,
    position: 'relative'
  },
  listItemSelected: {
    width: '100%',
    borderColor: colors.green,
    borderWidth: 1,
    height: 70,
    paddingLeft: 10,
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: colors.green
  },
  allergyIconSelected: {
    color: 'red',
    fontSize: 25,
    position: 'absolute',
    left: '85%',
    top: '60%'
  },
  extra: {
    borderRadius: 50,
    width: 25,
    height: 25,
    backgroundColor: colors.alert,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '95%',
    top: '60%'
  },
  save: {
    borderRadius: 10,
    backgroundColor: colors.green,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    position: 'absolute',
    top: '95%',
    left: '65%'
  }

});

function RestaurantMenu ({ selectedRestaurant, user, actions, navigation, booking }:{selectedRestaurant: any, user:any, actions: any, navigation:any, booking:any}) {
  const [selectedType, setSelectedType] = React.useState('firstCourse');
  const [selectedTitle, setSelectedTitle] = React.useState(1);
  const [selectedFirst, setSelectedFirst] = React.useState(booking.people.length ? booking.people[0].selections[0] : '');
  const [selectedSecond, setSelectedSecond] = React.useState(booking.people.length ? booking.people[0].selections[1] : '');
  const [selectedDessert, setSelectedDessert] = React.useState(booking.people.length ? booking.people[0].selections[2] : '');

  const checkAllergies = ({ allergies }:any, { ingredients }:any) => {
    let isAllergic = false;
    allergies.forEach((allergy:any) => {
      if (ingredients.includes(allergy)) {
        isAllergic = true;
      }
    });
    return isAllergic;
  };

  const setSelectedDish = (selectedTittle: number, { name }:{name:string}) => {
    switch (selectedTittle) {
      case 1:
        setSelectedFirst(name);
        break;
      case 2:
        setSelectedSecond(name);
        break;
      case 3:
        setSelectedDessert(name);
        break;
    }
  };

  const checkIfselected = ({ name }:{name: string}) => {
    return name === selectedFirst || name === selectedSecond || name === selectedDessert;
  };
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
    <TouchableWithoutFeedback disabled={checkAllergies(user, item)} key={item.name} onPress={() => { setSelectedDish(selectedTitle, item); }}>
      <View style = {checkIfselected(item) ? styles.listItemSelected : styles.listItem}>
        <Text >{item.name}</Text>
        {checkAllergies(user, item) && <Icon style = {styles.allergyIconSelected} name="sad-outline"></Icon>}
        {item.extra > 0 && <View style={styles.extra}><Text>{item.extra}</Text></View>}
      </View>
      </TouchableWithoutFeedback>
     )}
     <View ><Text>Primer plato:</Text></View>
     <Text>{selectedFirst}</Text>
      <View ><Text>Segundo plato:</Text></View>
       <Text>{selectedSecond}</Text>
       <View ><Text>Postre:</Text></View>
        <Text>{selectedDessert}</Text>
     </View>

     <TouchableOpacity style = {styles.save} onPress={() => { actions.resetBooking(); actions.saveMenuSelection(selectedFirst, selectedSecond, selectedDessert, user); navigation.goBack(); }}><Text>Guardar selección</Text></TouchableOpacity>
    </View>
  );
}

function mapStateToProps ({ restaurants: { selectedRestaurant }, user, booking }:any) {
  return { selectedRestaurant, user, booking };
}

function mapDispatchToProps (dispatch:Dispatch) {
  return { actions: bindActionCreators({ saveMenuSelection, resetBooking }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantMenu);
