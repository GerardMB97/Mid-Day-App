import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import Profile from 'src/pages/Profile';
import CategoriesList from '../CategoriesList';

const Tab = createBottomTabNavigator();
export default function Footer () {
  return (
    <NavigationContainer>
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
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="CategoriesList" component={CategoriesList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
