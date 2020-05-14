import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlatButton from '../shared/button';


export default function Income() {
  return (
    <View style={styles.container}>
      <Text>Income</Text>
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
});