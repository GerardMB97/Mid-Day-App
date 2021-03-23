import { User, Booking } from '../../models';
import React from 'react';
import { Text, View, StyleSheet, FlatList, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import colors from '../../../colors';
import Icon from 'react-native-vector-icons/Ionicons';
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
  }
});

function BookingsList ({ user }:{user:User}) {
  console.log('Im an invitation', user.bookings[0]);
  console.log(user.bookings.length);
  return (
    <View style={styles.container}>
      { user.bookings.length && <FlatList
      keyExtractor={booking => booking._id}
      data={user.bookings}
      renderItem = {({ item }) => {
        const isAdmin = user._id === item.bookingAdmin._id;
        return (
        <View style={styles.bookingBadge}>
          <ImageBackground
          imageStyle={{ opacity: 0.7 }} style={styles.bookingImage} source={{ uri: item.restaurant.image }}>
            <View style={styles.topContainer}><Text>reserva para {item.pax} en {item.restaurant.name} el {item.date}</Text></View>
            <View style={styles.bottomContainer}>
              {isAdmin
                ? <TouchableWithoutFeedback><Icon style={styles.icon} name="trash-outline"></Icon></TouchableWithoutFeedback>
                : <Text>Peyete</Text>
            }
              <TouchableWithoutFeedback><Icon style={styles.icon} name="settings-outline"></Icon></TouchableWithoutFeedback>
            </View>
          </ImageBackground>
        </View>);
      }

      }
      >

      </FlatList>}
    </View>

  );
}

function mapStateToProps ({ user }:{user:User}) {
  return { user };
}
export default connect(mapStateToProps)(BookingsList);
