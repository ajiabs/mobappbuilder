import BottomTabNavigation from './Bottom-navigation';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import ReactNavigation from 'react-navigation';

import {
  createAppContainer,
  StackViewTransitionConfigs,
} from 'react-navigation';

export const MenuNavigation = {
  bottomNavigation: BottomTabNavigation,
};
