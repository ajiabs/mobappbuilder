/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createAppContainer } from 'react-navigation';
import OfflineAlert from './src/components/OfflineAlert';
import { MenuNavigation } from './src/navigation';

const AppNavigator = MenuNavigation.bottomNavigation;
const AppContainer = createAppContainer(AppNavigator);
console.disableYellowBox = true;

export default class App extends React.Component {

  componentDidMount () {
    SplashScreen.hide();
  }
  render() {
    return (
      <>
        <AppContainer  />
        <OfflineAlert/>
      </>
    )
  }
}