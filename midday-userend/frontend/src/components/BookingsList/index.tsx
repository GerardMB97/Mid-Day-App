import { User, Booking } from '../../models';
import React from 'react';
import { Text, View, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

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
    shadowOpacity: 1.0
  },
  bookingImage: {
    width: '100%',
    height: '100%'
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
      renderItem = {({ item }) =>
        <View style={styles.bookingBadge}>
          <ImageBackground
          imageStyle={{ opacity: 0.7 }} style={styles.bookingImage} source={{ uri: item.restaurant.image }}>
          </ImageBackground>
        </View>
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
