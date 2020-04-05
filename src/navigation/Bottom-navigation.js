import React from 'react';
import {Image, Text} from 'react-native';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Styles} from '../assets/css/styles';
import {AssetsImages} from '../assets/images';
import SvgImage from '../assets/svgIcons';
import {BuildConfig} from '../config';
import AboutUs from '../screens/About-us';
import ContactUs from '../screens/ContactUs/Contact-us';
import {Donation} from '../screens/Donation';
import EventDetails from '../screens/Event-details';
import EventPayment from '../screens/Event-payment';
import EventListing from '../screens/EventListing/EventListing';
import EventListingDetail from '../screens/EventListingDetails/EventLisingDetail';
import More from '../screens/More/More';
import {NewsListing} from '../screens/NewsListing';

const MoreStack = createStackNavigator(
  {
    More: {
      screen: More,
    },
    AboutUs: {
      screen: AboutUs,
    },
    ContactUs: {
      screen: ContactUs,
    },
  },
  {
    initialRouteName: 'More',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const NewsFeedStack = createStackNavigator(
  {
    ListNews: {
      screen: NewsListing, //NewsListing
    },
    // AboutUs: {
    //   screen: AboutUs
    // },
    // ContactUs: {
    //   screen: ContactUs
    // }
  },
  {
    initialRouteName: 'ListNews',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const HomeStack = createStackNavigator(
  {
    Events: {
      screen: EventListing,
    },
    EventListingDetail: {
      screen: EventListingDetail,
    },
    EventDetails: {
      screen: EventDetails,
    },
    EventPayment: {
      screen: EventPayment,
    },
    Donation: {
      screen: Donation,
    },
  },

  {
    initialRouteName: 'Events',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      cardOverlayEnabled: true,
      gestureEnabled: false,
    },
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

HomeStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 2) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

export default BottomTabNavigation = createBottomTabNavigator(
  {
    Events: {
      screen: HomeStack,
    },
    // NewsFeed: {
    //   screen: NewsFeedStack
    // },
    More: {
      screen: MoreStack,
    },
  },

  {
    initialRouteName: 'Events',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarOptions: {
        style:{height:60}
    }, 
      tabBarLabel: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let label;

        return (
          <Text
            style={focused ? [Styles.activeTabText] : Styles.inactiveTabText}>
            {routeName}
          </Text>
        );
      },
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        //let IconComponent = Ionicons;
        let iconName;
        let badgeCount = 2;
        if (routeName === 'Events') {
         //iconName = AssetsImages.home;
         return (
          <SvgImage
            icon={'home'}
            height={40}
            width={40}
            color={tintColor}
          />
        );
        } else if (routeName === 'Settings') {
          iconName = AssetsImages.settings;
        } else if (routeName === 'NewsFeed') {
          // iconName = AssetsImages.newsfeed;
          //  iconName = <SvgImage icon={'newsfeedIcon'} height={20} width={20} color={tintColor} />
          return (
            <SvgImage
              icon={'newsfeedIcon'}
              height={40}
              width={40}
              color={tintColor}
            />
          );
        } else if (routeName === 'More') {
          //iconName = AssetsImages.more;
          // <SvgImage icon={'more'} height={20} width={20} color={tintColor} />
          return (
            <SvgImage
              icon={'more'}
              height={40}
              width={40}
              color={tintColor}
            />
          );
        }

        return (
          <Image
            style={{width: 30, height: 25, tintColor: tintColor}}
            source={iconName}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: BuildConfig.menu_icon_color,
      inactiveTintColor: 'gray',
    },
  },
);
