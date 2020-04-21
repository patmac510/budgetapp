import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Categories() {
  return (
    <View style={styles.container}>
      <Text>Add and edit Categories</Text>
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