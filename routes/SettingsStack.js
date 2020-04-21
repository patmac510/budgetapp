import { createStackNavigator } from 'react-navigation-stack';
import Budget from '../screens/Budget';
import Income from '../screens/Income';
import Categories from '../screens/Categories';
import SpendingPlan from '../screens/SpendingPlan';
import Summary from '../screens/Summary';
import Settings from '../screens/Settings';
import Header from '../shared/header';
import React from 'react';


const screens = {
  Settings: {
    screen: Settings,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Settings' />
      }
    }
  },
  Budget: {
    screen: Budget,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Budget' />
      }
    }
  },
  Income: {
    screen: Income,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Income' />
      }
    }
  },
  Categories: {
    screen: Categories,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Categories' />
      }
    }
  },
  SpendingPlan: {
    screen: SpendingPlan,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Spending Plan' />
      }
    }
  },
  Summary: {
    screen: Summary,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Summary' />
      }
    }
  }
}

const SettingsStack = createStackNavigator(screens)

export default SettingsStack;