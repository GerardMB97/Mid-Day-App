import CategoriesList from '../CategoriesList';
import RestaurantsList from '../RestaurantsList';
import RestaurantDetail from '../../pages/RestaurantDetail';
import RestaurantMenu from '../RestaurantMenu';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export default function HomeStackScreen () {
  return (
    <HomeStack.Navigator initialRouteName="LandingPage">
      <HomeStack.Screen name="LandingPage" component={CategoriesList}></HomeStack.Screen>
      <HomeStack.Screen name="CategoriesDetail" component={RestaurantsList}></HomeStack.Screen>
      <HomeStack.Screen name="RestaurantDetail" component={RestaurantDetail}></HomeStack.Screen>
      <HomeStack.Screen name="RestaurantMenu" component={RestaurantMenu}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}
