
import React, { Component } from 'react';
import SplashScreen from './screens/splashscreen';
import AppNavigator from './screens/router';

export default class App extends Component {

  componentWillMount() {
    this.setState({
      view: <SplashScreen />
    });

    setTimeout(() => {
      this.setState({
        view: <AppNavigator />
      });
    }, 1000);
  }

  render() {
    return (
      // this.state.view
      <AppNavigator />
    );
  }
}
