import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesList from './src/components/CategoriesList';
import {Provider} from 'react-redux';
import store from './src/redux/store/configureStore';

export default function App() {
  return (
  <Provider store = {store}>
   <CategoriesList/>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
