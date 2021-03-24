import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import HomeStackScreen from '../Navigation/homeStackScreen';
import ProfileStackScreen from '../Navigation/profileStackScreen';
import InvitationsStackScreen from '../Navigation/invitationStackScreen';

const Tab = createBottomTabNavigator();
export default function Footer () {
  return (

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: function render ({ focused, color, size }:any) {
            let iconName = '';

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            return <Icons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="Landing" component={ProfileStackScreen} />
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Invitations" component={InvitationsStackScreen} />
      </Tab.Navigator>

  );
}
