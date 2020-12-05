import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AppButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{ ...props.style }}>
      <View style={styles.buttoncontainer}>
        <Text style={styles.buttontext}>{props.children}</Text>
      </View>
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
  buttoncontainer: {
    backgroundColor: 'blue',
    width: 80,
    height: 40,
    borderRadius: 20
  },
  buttontext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    paddingTop: '12%'
  }

});

export default AppButton;