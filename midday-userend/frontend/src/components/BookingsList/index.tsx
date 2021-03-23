import { User } from '../../models';
import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

function BookingsList ({ user }) {
  console.log(user);
  return (
    <Text>Hello World!</Text>
  );
}

function mapStateToProps ({ user }:User) {
  return { user };
}
export default connect(mapStateToProps)(BookingsList);
