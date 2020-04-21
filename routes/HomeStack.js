import { createStackNavigator } from 'react-navigation-stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import AddTransaction from '../screens/AddTransaction';
import Transactions from '../screens/Transactions';
import Months from '../screens/Months';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Login: {
    screen: Login,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Login' />
      }
    }
  },
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Home' />
      }
    }
  },
  AddTransaction: {
    screen: AddTransaction,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Add Transaction' />
      }
    }
  },
  Transactions: {
    screen: Transactions,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Transaction History' />
      }
    }
  },
  Months: {
    screen: Months,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Previous Months' />
      }
    }
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {height: 60,}
  }
})

export default HomeStack;