import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AppButton from '../Components/Appbutton';


const Homepage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>memEdit</Text>
      <Text>Logo</Text>
      <View style={styles.buttoncont}>
        <AppButton onPress={() => { props.onClick() }}>LOGIN</AppButton>
        <AppButton>SIGNUP</AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#66ffff',
    // height: '100%'
  },
  mainText: {
    fontSize: 50,
    paddingTop: '50%',
  },
  buttoncont: {
    flexDirection: 'row',
    marginTop: 370,
    width: '70%',
    justifyContent: 'space-around'
  }
});

export default Homepage;