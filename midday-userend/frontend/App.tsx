import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/configureStore';

import LandingPage from './src/pages/LandingPage';

export default function App () {
  return (

      <Provider store={store}>
        <LandingPage />
      </Provider>

  );
}
