import { User, Booking } from '../../models';
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import colors from '../../../colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { bindActionCreators } from 'redux';
import { deleteBooking } from '../../redux/actions/userActions/userActions';
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
    position: 'relative'
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

function BookingsList ({ user, actions, route }:{user:User, actions:any, route:any}) {
  const { list }:{list:'invitations' | 'bookings'} = route.params;
  console.log(user[list]);
  return (
    <View style={styles.container}>
      { user[list].length
        ? <FlatList
      keyExtractor={booking => booking._id}
      data={user[list]}
      renderItem = {({ item }) => {
        const isAdmin = user._id === item.bookingAdmin?._id;
        const company = item.people.length - 1;
        const companyString = company > 0 ? `os ha invitado a ti y a ${company} más` : 'te ha invitado';
        return (
        <View style={styles.bookingBadge}>
          <ImageBackground
          imageStyle={{ opacity: 0.7 }} style={styles.bookingImage} source={{ uri: item.restaurant?.image }}>

            {list === 'bookings'
              ? <View style={styles.topContainer}><Text>reserva para {item.pax} en {item.restaurant?.name} el {item.date}</Text></View>
              : <View style={styles.topContainer}><Text>{item.bookingAdmin.name} {companyString} a comer en {item.restaurant.name} el {item.date}</Text></View>
          }

            {list === 'bookings'
              ? <View style={styles.bottomContainer}>
              {isAdmin &&
                 <TouchableWithoutFeedback onPress={() => actions.deleteBooking(user, item._id)}><Icon style={styles.icon} name="trash-outline"></Icon></TouchableWithoutFeedback>

            }
              <TouchableWithoutFeedback><Icon style={styles.icon} name="settings-outline"></Icon></TouchableWithoutFeedback>
            </View>
              : <View style={styles.bottomContainer}>
                <TouchableWithoutFeedback><Icon style={styles.greenicon} name="restaurant-outline"></Icon></TouchableWithoutFeedback>
                <TouchableWithoutFeedback><Icon style={styles.redicon} name="trash-outline"></Icon></TouchableWithoutFeedback>
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
  return { actions: bindActionCreators({ deleteBooking }, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(BookingsList);
