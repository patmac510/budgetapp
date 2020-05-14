import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Card from '../shared/card'
import {MaterialIcons} from '@expo/vector-icons';
const axios = require('axios');


export default class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      category: [],
    }
    this.getTransactions = this.getTransactions.bind(this)
    this.deleteTrans = this.deleteTrans.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  componentDidMount() {
    this.getTransactions()
  }

  getTransactions() {
    axios.get('http://localhost:3000/spending/transactions/Other')
      .then((response) => {
        this.setState({transactions: response.data})
      })
      .catch((err) => {
        console.log(err, 'unable to retrieve transaction list')
      })
  }

  deleteTrans(id) {
    this.deleteItem(id)
    axios.delete(`http://localhost:3000/spending/transactions`, { params: id })
    .then(() => {
      console.log('transaction deleted')
    })
    .catch((err) => {
      console.log(err, 'failed to delete')
    })
  }

  deleteItem(id) {
    this.setState({
      transactions: this.state.transactions.filter(transaction => transaction.transaction_id !== id)
    })
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
              <MaterialIcons name='close' size={28} onPress={() => this.deleteTrans(transaction.transaction_id)} />
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