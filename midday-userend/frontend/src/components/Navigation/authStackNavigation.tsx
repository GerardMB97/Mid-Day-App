import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
const Stack = createStackNavigator();

export default function Approutes () {
  return (
     <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}></Stack.Screen>

    </Stack.Navigator>
  );
}
