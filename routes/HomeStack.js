import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from '../screens/Login';
import Home from '../screens/Home';
import AddTransaction from '../screens/AddTransaction';
import Transactions from '../screens/Transactions';
import Months from '../screens/Months';

const screens = {
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  },
  AddTransaction: {
    screen: AddTransaction
  },
  Transactions: {
    screen: Transactions
  },
  Months: {
    screen: Months
  }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);