import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [{transaction_name:'bus', transaction_id: 1}, {transaction_name:'food', transaction_id: 2}],
      category: [],
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.transactions.map((transaction) => {
          return (
            <View key={transaction.transaction_id}>
              <Text style={styles.transaction}>{transaction.transaction_name}</Text>
              </View>
          )
        })}
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transaction: {
    marginTop: 10,
    padding: 20,
    width: 300,
    backgroundColor: 'blue',
    fontSize: 18,
    textAlign: 'left'
  }
});