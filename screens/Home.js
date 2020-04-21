import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home( {navigation} ) {

  const addTrans = () => {
    navigation.navigate('AddTransaction')
  }
  const trans = () => {
    navigation.navigate('Transactions')
  }
  const months = () => {
    navigation.navigate('Months')
  }


  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <View style={styles.buttonContainer}>
        <Button title='Add a Transaction' onPress={addTrans} />
        <Button title='Transactions' onPress={trans} />
        <Button title='View Previous Months' onPress={months} />
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