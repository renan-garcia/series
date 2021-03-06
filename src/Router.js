import { StackNavigator } from 'react-navigation';

import LoginPage from './pages/LoginPage';
import SeriesPage from './pages/SeriesPage';

export default StackNavigator({
  'Main': {
    screen: SeriesPage
  },
  'Login': {
    screen: LoginPage,
    navigationOptions: {
      title: 'Bem vindo!',
    }
  },

}, {
  navigationOptions: {
    title: "Series!",
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5',
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
    }
  }
});