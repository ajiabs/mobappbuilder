import React from 'react';
import { Image ,Text,StyleSheet} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../screens/Home';
import AboutUs from '../screens/About-us';
import ContactUs from '../screens/Contact-us';
import Events from '../screens/Events';
import Settings from '../screens/Settings';
import More from '../screens/More';
import { AssetsImages } from '../assets/images';

export default  BottomTabNavigation  = createBottomTabNavigator(
    {
      Home: {
        screen: Home,
      },
      Settings: {
        screen: Settings,
      },
      More: {
        screen: More,
      }
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: ({ navigation }) => ({

        tabBarLabel: ({ focused,horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let label;

          return  <Text style={ focused ? styles.activeTabText : styles.inactiveTabText}>{routeName}</Text>;

        },
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          //let IconComponent = Ionicons;
          let iconName;
          let badgeCount =2;
          if (routeName === 'Home') {
            iconName = AssetsImages.home;
          }
          else if (routeName === 'Settings') {
            iconName = AssetsImages.settings;
          }
         else if (routeName === 'More') {
            iconName = AssetsImages.more;
          }
        
  
    
          return <Image   style={{width: 25, height: 25 , tintColor: tintColor}} source={iconName}/>;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
      },
  
  
    }
  );


const styles = StyleSheet.create({
  activeTabText: {
    color:'#06D00F',
    fontSize: 12,
    textAlign: 'center'
  },
  inactiveTabText: {
    color:'gray',
    fontSize: 12,
    textAlign: 'center'
  }
});
