import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import FlatButton from '../shared/button';
import { Dropdown } from 'react-native-material-dropdown';


export default class AddTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction: '',
      category: '',
      amount: '',
    }
    this.addTrans = this.addTrans.bind(this)
  }
  addTrans() {
    
  }

  render() {
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Name of Transaction'
          onChangeText={(val) => this.setState({transaction: val})} />
        <TextInput
          style={styles.input}
          placeholder='Amount'
          onChangeText={(val) => this.setState({amount: val})} />
        <Dropdown
          style={styles.menu}
          label='Category'
          data={data}
          onChangeText={(data) => this.setState({category: data})}
        />
        <FlatButton text='Add Transaction' onPress={this.addTrans} />
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