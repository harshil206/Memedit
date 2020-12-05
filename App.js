import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from './Screen/Homepage';
import Login from "./Screen/Login";
import Signup from './Screen/Signup';


const Stack = createStackNavigator();


export default function App() {
  const [login, setLogin] = useState(false);

  const forLogin = () => {
    setLogin(true);
  }
  let content = <Homepage onClick={forLogin}></Homepage>
  if (login) {
    content = <Login></Login>
  }
  return (
    <View style={styles.screen}>
      {/* // <NavigationContainer>
        //   <Stack.Navigator initialRouteName={Homepage}>
          //     <Stack.Screen name='Home' component={Homepage}></Stack.Screen>
    //     <Stack.Screen name='Login' component={Login} />
    //     <Stack.Screen name='SIGN UP ' component={Signup} />
    //   </Stack.Navigator>
    // </NavigationContainer> */}
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: 'red'
  }
});
