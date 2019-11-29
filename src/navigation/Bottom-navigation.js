import React from 'react';
import { Image ,Text,StyleSheet} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import AboutUs from '../screens/About-us';
import ContactUs from '../screens/Contact-us';
import Events from '../screens/Events';
import EventDetails from '../screens/Event-details';
import Settings from '../screens/Settings';
import More from '../screens/More';
import { AssetsImages } from '../assets/images';
import { BuildConfig } from '../config';
import { Styles } from '../assets/css/styles';


const MoreStack = createStackNavigator({
  More: {
    screen: More,
  },
  AboutUs: {
    screen: AboutUs,
  },
  ContactUs: {
    screen: ContactUs,
  }
},{ initialRouteName: 'More' , 
headerMode: 'none',
navigationOptions: {
    headerVisible: false,
}});
const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
  },
  Events: {
    screen: Events,
  },
  EventDetails: {
    screen: EventDetails,
  }
},{ initialRouteName: 'Home' , 
headerMode: 'none',
navigationOptions: {
    headerVisible: false,
}});
export default  BottomTabNavigation  = createBottomTabNavigator(
    {
      Home: {
        screen: HomeStack,
      },
      Settings: {
        screen: Settings,
      },
      More: {
        screen: MoreStack,
      }
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: ({ navigation }) => ({

 

        tabBarLabel: ({ focused,horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let label;
    
          return  <Text style={ focused ? [Styles.activeTabText] : Styles.inactiveTabText}>{routeName}</Text>;


       

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
        activeTintColor:  BuildConfig.menu_icon_color,
        inactiveTintColor: 'gray',
      },
  
  
    }
  );


