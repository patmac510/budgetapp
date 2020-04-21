import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function FlatButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} >
      <View style={styles.button} >
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    width: 300,
    margin: 5,
    backgroundColor: '#3399FF',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  }
})
