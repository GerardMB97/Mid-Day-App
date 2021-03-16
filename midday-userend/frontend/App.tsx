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

const Stack = createStackNavigator();

export default function App () {
  return (

      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='LandingPage' >
            <Stack.Screen name='SignUp'component={SignUp} options= {{ headerShown: false }}/>
            <Stack.Screen name='SignIn' component={SignIn} options= {{ headerShown: false }}/>
            <Stack.Screen name='LandingPage' component={CategoriesList} options={{ headerShown: false }}/>
            <Stack.Screen name='CategoriesDetail' component={CategoriesDetail}/>
            <Stack.Screen name='RestaurantDetail' component={RestaurantDetail}/>
        </Stack.Navigator>
        </NavigationContainer>
      </Provider>

  );
}
