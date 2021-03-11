import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/configureStore';

import CategoriesDetail from './src/pages/CategoriesDetail';
import CategoriesList from './src/components/CategoriesList';

const Stack = createStackNavigator();

export default function App () {
  return (

      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='LandingPage' component={CategoriesList} options={{ headerShown: false }}/>
            <Stack.Screen name='CategoriesDetail' component={CategoriesDetail}/>
        </Stack.Navigator>
        </NavigationContainer>
      </Provider>

  );
}
