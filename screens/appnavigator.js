import { createStackNavigator } from 'react-navigation';
import LoginScreen from './login';
import HomeScreen from './home';

const AppNavigator = StackNavigator({
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
});

export default AppNavigator;