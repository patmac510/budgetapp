import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
      <Text>Settings</Text>
      <View style={styles.buttonContainer}>
        <Button title='Change Budget Amount' onPress={budget} />
        <Button title='Change Income Amount' onPress={income} />
        <Button title='Change/Add Categories' onPress={categories} />
        <Button title='Edit Spending Plan' onPress={spendingPlan} />
        <Button title='View Summary' onPress={summary} />
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