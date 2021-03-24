import React from 'react';
import BookingsList from '../BookingsList';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export default function HomeStackScreen () {
  return (
    <HomeStack.Navigator initialRouteName="BookingsList">
      <HomeStack.Screen name="BookingsList" component={BookingsList} initialParams={{ list: 'invitations' }}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}
