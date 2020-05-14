import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FlatButton from '../shared/button';
const axios = require('axios')


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      categories: [],
      transactions:[],
    }
    this.addTrans = this.addTrans.bind(this);
    this.trans = this.trans.bind(this);
    this.months = this.months.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  componentDidMount() {
    this.getProfile()
  }

  getProfile() {

    axios.get('http://localhost:3000/spending/1', {params:{user_id: 1}})
      .then((response) => {
        this.setState({ profile: response.data[0] })
      })
      .catch((err) => {
        console.log(err, 'cannot get profile information')
      })
  }

  addTrans() {
    this.props.navigation.navigate('AddTransaction')
  }
  trans () {
    this.props.navigation.navigate('Transactions')
  }
  months () {
    this.props.navigation.navigate('Months')
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.budget}>Current Budget: ${this.state.profile.budget}</Text>
          <Text style={styles.spending}>Total Spending: ${this.state.profile.spending}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <FlatButton text='Add Transaction' onPress={this.addTrans} />
          <FlatButton text='Transactions' onPress={this.trans} />
          <FlatButton text='View Previous Months' onPress={this.months} />
        </View>
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
  buttonContainer: {
    marginTop: 20,
  },
  budget: {
    margin: 10,
    padding: 20,
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'black',
    textAlign: 'center',
    justifyContent: 'center',
  },
  spending: {
    margin: 10,
    padding: 20,
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'black',
    textAlign: 'center',
    justifyContent: 'center',
  }
});