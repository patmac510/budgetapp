import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Card from '../shared/card'
import {MaterialIcons} from '@expo/vector-icons';


export default class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [{transaction_name:'bus', transaction_id: 1, amount: 200}, {transaction_name:'food', transaction_id: 2, amount: 350}],
      category: [],
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.transactions.map((transaction) => {
          return (
            <View key={transaction.transaction_id}>
              <Card>
              <Text style={styles.transaction}>{transaction.transaction_name}</Text>
              <Text style={styles.amount}>$ {transaction.amount}</Text>
              <TouchableOpacity style={styles.icon}>
              <MaterialIcons name='close' size={28} onPress={this.deleteTrans} />
              </TouchableOpacity>
              </Card>
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
    marginTop: 20,
  },
  transaction: {
    marginTop: 5,
    padding: 10,
    width: 325,
    backgroundColor: '#fff',
    fontSize: 18,
    textAlign: 'left',
  },
  icon: {
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amount: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 40,
    marginTop: 5,
    padding: 10,
    fontSize: 18,
  }
});