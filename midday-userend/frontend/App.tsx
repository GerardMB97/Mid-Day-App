import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/configureStore';

import LandingPage from './src/pages/LandingPage';
import CategoriesDetail from './src/pages/CategoriesDetail';

const Stack = createStackNavigator();

export default function App () {
  return (

      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='LandingPage' component={LandingPage} options={{ headerShown: false }}/>
            <Stack.Screen name='CategoriesDetail' component={CategoriesDetail}/>
        </Stack.Navigator>
        </NavigationContainer>
      </Provider>

  );
}
