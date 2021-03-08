/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import store from './src/redux/store/configureStore';
import { Provider } from 'react-redux';
import CategoriesList from './src/components/CategoriesList';

const App: () => any = () => {
  return (
 <Provider store = {store}>
  <CategoriesList/>
 </Provider>
  );
};

export { App };
