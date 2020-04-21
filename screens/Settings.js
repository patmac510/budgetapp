import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FlatButton from '../shared/button';


export default function Settings( {navigation} ) {

  const budget = () => {
    navigation.navigate('Budget')
  }
  const income = () => {
    navigation.navigate('Income')
  }
  const categories = () => {
    navigation.navigate('Categories')
  }
  const spendingPlan = () => {
    navigation.navigate('SpendingPlan')
  }
  const summary = () => {
    navigation.navigate('Summary')
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <FlatButton text='Change Budget' onPress={budget} />
        <FlatButton text='Change Income' onPress={income} />
        <FlatButton text='Cahnge/Add Categories' onPress={categories} />
        <FlatButton text='Spending Plan' onPress={spendingPlan} />
        <FlatButton text='View Summary' onPress={summary} />
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