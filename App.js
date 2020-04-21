import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/HomeStack'

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello World</Text>
    // </View>
    <Navigator />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
