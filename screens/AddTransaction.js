import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import FlatButton from '../shared/button';
import { Dropdown } from 'react-native-material-dropdown';
const axios = require('axios');


export default class AddTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction: '',
      category: '',
      amount: 0,
      data: [{
        value: 'Transportation',
      }, {
        value: 'Food',
      }, {
        value: 'Utilities',
      }],
    }
    this.postTransaction = this.postTransaction.bind(this)
  }

  postTransaction() {
    const date = new Date()
    console.log('state =>', this.state.transaction)
    axios.post('http://localhost:3000/spending/transactions', {
      transaction_name: this.state.transaction,
      category_name: 'Other',
      amount: this.state.amount,
      transaction_date: date.getTime(),
      user_id: 1,
    })
      .then(() => {
        console.log('succesfully posted transaction')
      })
      .catch((err) => {
        console.log(err, 'failed to post transaction')
      })
      this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Name of Transaction'
          onChangeText={(val) => this.setState({ transaction: val })} />
        <TextInput
          style={styles.input}
          placeholder='Amount'
          onChangeText={(val) => this.setState({ amount: val })} />
        <Dropdown
          style={styles.menu}
          label='Category'
          data={this.state.data}
          onChangeText={(data) => this.setState({ category: data.value })}
        />
        <FlatButton text='Add Transaction' onPress={this.postTransaction} />
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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 5,
    width: 300,
  },
  menu: {
    margin: 140,
  }
});