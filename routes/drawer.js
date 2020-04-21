import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './HomeStack';
import SettingsStack from './SettingsStack';


const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack
  },
  Settings: {
    screen: SettingsStack
  }
})

export default createAppContainer(DrawerNavigator);
