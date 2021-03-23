import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/configureStore';

import CategoriesDetail from './src/pages/CategoriesDetail';
import CategoriesList from './src/components/CategoriesList';
import RestaurantDetail from './src/pages/RestaurantDetail';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import RestaurantMenu from './src/components/RestaurantMenu';
import Profile from './src/pages/Profile';
import BookingsList from './src/components/BookingsList';

const Stack = createStackNavigator();

export default function Approutes () {
  return (

      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen name='SignUp'component={SignUp} options= {{ headerShown: false }}/>
            <Stack.Screen name='SignIn' component={SignIn} options= {{ headerShown: false }}/>
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='LandingPage' component={CategoriesList} options={{ headerShown: false }}/>
            <Stack.Screen name='BookingsList' component={BookingsList}/>
            <Stack.Screen name='CategoriesDetail' component={CategoriesDetail}/>
            <Stack.Screen name='RestaurantDetail' component={RestaurantDetail}/>
            <Stack.Screen name='RestaurantMenu' component={RestaurantMenu}/>
        </Stack.Navigator>
        </NavigationContainer>
      </Provider>

  );
}
