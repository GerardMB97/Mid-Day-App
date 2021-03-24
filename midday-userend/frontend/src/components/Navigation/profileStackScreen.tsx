import React from 'react';
import Profile from '../../pages/Profile';
import BookingsList from '../BookingsList';
import RestaurantMenu from '../RestaurantMenu';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export default function ProfileStackScreen () {
  return (
    <HomeStack.Navigator initialRouteName="Profile">
      <HomeStack.Screen name="Profile" component={Profile}></HomeStack.Screen>
      <HomeStack.Screen name="BookingsList" component={BookingsList}></HomeStack.Screen>
      <HomeStack.Screen name="RestaurantMenu" component={RestaurantMenu}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}
