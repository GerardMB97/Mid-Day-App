import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/configureStore';

import AppRoutes from './src/components/Navigation/AppRoutes';

export default function App () {
  return (

      <Provider store={store}>
        <NavigationContainer>
          <AppRoutes></AppRoutes>
        </NavigationContainer>
      </Provider>

  );
}
