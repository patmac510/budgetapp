import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FlatButton from '../shared/button';

export default function Login( {navigation} ) {
  
  const pressHandler = () => {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <View style={styles.buttonContainer}>
        <FlatButton text='Next' onPress={pressHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  }
});