import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FlatButton from '../shared/button';


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
      <View>
        <Text style={styles.budget}>Current Budget: $3000</Text>
        <Text style={styles.spending}>Total Spending: $550</Text>
      </View>
      <View style={styles.buttonContainer}>
        <FlatButton text='Add Transaction' onPress={addTrans} />
        <FlatButton text='Transactions' onPress={trans} />
        <FlatButton text='View Previous Months' onPress={months} />
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
  },
  budget: {
    margin: 10,
    padding: 20,
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'black',
    textAlign: 'center',
    justifyContent: 'center',
  },
  spending: {
    margin: 10,
    padding: 20,
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'black',
    textAlign: 'center',
    justifyContent: 'center',
  }
});