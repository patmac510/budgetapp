import { createStackNavigator } from 'react-navigation-stack';
import Budget from '../screens/Budget';
import Income from '../screens/Income';
import Categories from '../screens/Categories';
import SpendingPlan from '../screens/SpendingPlan';
import Summary from '../screens/Summary';
import Settings from '../screens/Settings';


const screens = {
  Settings: {
    screen: Settings
  },
  Budget: {
    screen: Budget
  },
  Income: {
    screen: Income
  },
  Categories: {
    screen: Categories
  },
  SpendingPlan: {
    screen: SpendingPlan
  },
  Summary: {
    screen: Summary
  }
}

const SettingsStack = createStackNavigator(screens)

export default SettingsStack;