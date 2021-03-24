import { Dispatch, bindActionCreators } from 'redux';
import React from 'react';
import { Text, View, StyleSheet, FlatList, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import colors from '../../../colors';
import Icon from 'react-native-vector-icons/Ionicons';

import { deleteBooking, deleteInvitation } from '../../redux/actions/userActions/userActions';
import { getSelectedRestaurant } from '../../redux/actions/restaurantActions/restaurantAction';
import { getBooking } from '../../redux/actions/bookingActions/bookingActions';
import { User } from '../../models';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  bookingBadge: {
    width: '100%',
    height: 150,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 1.0,
    position: 'relative',
    marginBottom: 20
  },
  bookingImage: {
    width: '100%',
    height: '100%'
  },
  topContainer: {
    width: '100%',
    height: 50,
    backgroundColor: colors.transparentGray,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomContainer: {
    width: 80,
    height: 50,
    position: 'absolute',
    bottom: 0,
    left: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'

  },
  icon: {
    fontSize: 30,
    color: colors.alert
  },
  greenicon: {
    fontSize: 30,
    color: 'green'
  },
  redicon: {
    fontSize: 30,
    color: 'red'
  }
});

function BookingsList ({ user, actions, route, navigation }:{user:User, actions:any, route:any, navigation: any}) {
  const { list }:{list:'invitations' | 'bookings'} = route.params;
  return (
    <View style={styles.container}>
      { user[list].length
        ? <FlatList
      keyExtractor={booking => booking._id}
      data={user[list]}
      renderItem = {({ item }) => {
        const isAdmin = user._id === item.bookingAdmin?._id;
        const company = item.people?.length - 2;
        const companyString = company > 0 ? `os ha invitado a ti y a ${company} más` : 'te ha invitado';
        return (

        <View style={styles.bookingBadge}>
          <ImageBackground
          imageStyle={{ opacity: 0.7 }} style={styles.bookingImage} source={{ uri: item.restaurant?.image }}>

            {list === 'bookings'
              ? <View style={styles.topContainer}><Text>reserva para {item.pax} en {item.restaurant?.name} el {item.date}</Text></View>
              : <View style={styles.topContainer}><Text>{item.bookingAdmin?.name} {companyString} a comer en {item.restaurant?.name} el {item.date}</Text></View>
          }

            {list === 'bookings'
              ? <View style={styles.bottomContainer}>
              {isAdmin &&
                 <TouchableWithoutFeedback onPress={() => actions.deleteBooking(user, item._id)}><Icon style={styles.icon} name="trash-outline"></Icon></TouchableWithoutFeedback>

            }
              <TouchableWithoutFeedback onPress={() => {
                actions.getBooking(item._id);
                actions.getSelectedRestaurant(item.restaurant._id);
                navigation.navigate('RestaurantMenu', { mode: 'edittingBook' });
              }}><Icon style={styles.icon} name="settings-outline"></Icon></TouchableWithoutFeedback>
            </View>
              : <View style={styles.bottomContainer}>
                <TouchableWithoutFeedback onPress={() => {
                  actions.getSelectedRestaurant(item.restaurant._id);
                  actions.getBooking(item._id);
                  navigation.navigate('RestaurantMenu', { mode: 'editting' });
                }}>
                    <Icon style={styles.greenicon} name="restaurant-outline"></Icon></TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => { actions.deleteInvitation(user._id, item._id, true); }}><Icon style={styles.redicon} name="trash-outline"></Icon></TouchableWithoutFeedback>
              </View>}

          </ImageBackground>
        </View>);
      }

      }
      >

      </FlatList>
        : <Text>No tienes reservas</Text>}
    </View>

  );
}

function mapStateToProps ({ user }:{user:User}) {
  return { user };
}
function mapDispatchToProps (dispatch:Dispatch) {
  return { actions: bindActionCreators({ deleteBooking, deleteInvitation, getSelectedRestaurant, getBooking }, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(BookingsList);
