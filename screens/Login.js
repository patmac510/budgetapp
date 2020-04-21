import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login( {navigation} ) {
  
  const pressHandler = () => {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <View style={styles.buttonContainer}>
        <Button title='Next' onPress={pressHandler} />
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