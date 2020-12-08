import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Homepage from '../Screen/Homepage';
import Login from "../Screen/Login";
import Signup from '../Screen/Signup';


const Stack = createStackNavigator();

const MemeditNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Homepage}>
        <Stack.Screen name='Home Screen' component={Homepage} options={{
          headerShown: false,
        }} />
        <Stack.Screen name='Login' component={Login} options={{
          headerShown: false,
        }} />
        <Stack.Screen name='Signup' component={Signup} options={{
          headerShown: false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MemeditNavigator;