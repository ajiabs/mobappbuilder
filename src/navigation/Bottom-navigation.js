import React from "react";
import { Image, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import AboutUs from "../screens/About-us";
import ContactUs from "../screens/ContactUs/Contact-us";
import Events from "../screens/Events";
import EventDetails from "../screens/Event-details";
import EventPayment from "../screens/Event-payment";
import Settings from "../screens/Settings";
import More from "../screens/More/More";
import { AssetsImages } from "../assets/images";
import { BuildConfig } from "../config";
import { Styles } from "../assets/css/styles";
import EventListing from "../screens/EventListing/EventListing";
import EventListingDetail from "../screens/EventListingDetails/EventLisingDetail";
import { NewsListing } from "../screens/NewsListing";
import { Donation } from "../screens/Donation";
import SvgImage from "../assets/svgIcons";

const MoreStack = createStackNavigator(
  {
    More: {
      screen: More
    },
    AboutUs: {
      screen: AboutUs
    },
    ContactUs: {
      screen: ContactUs
    }
  },
  {
    initialRouteName: "More",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const NewsFeedStack = createStackNavigator(
  {
    ListNews: {
      screen: NewsListing //NewsListing
    }
    // AboutUs: {
    //   screen: AboutUs
    // },
    // ContactUs: {
    //   screen: ContactUs
    // }
  },
  {
    initialRouteName: "ListNews",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: EventListing
    },
    EventListingDetail: {
      screen: EventListingDetail
    },
    EventDetails: {
      screen: EventDetails
    },
    EventPayment: {
      screen: EventPayment
    },
    Donation: {
      screen: Donation
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 2) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

export default BottomTabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack
    },
    NewsFeed: {
      screen: NewsFeedStack
    },
    More: {
      screen: MoreStack
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarLabel: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let label;

        return (
          <Text
            style={focused ? [Styles.activeTabText] : Styles.inactiveTabText}
          >
            {routeName}
          </Text>
        );
      },
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        //let IconComponent = Ionicons;
        let iconName;
        let badgeCount = 2;
        if (routeName === "Home") {
          iconName = AssetsImages.home;
        } else if (routeName === "Settings") {
          iconName = AssetsImages.settings;
        } else if (routeName === "NewsFeed") {
          // iconName = AssetsImages.newsfeed;
          //  iconName = <SvgImage icon={'newsfeedIcon'} height={20} width={20} color={tintColor} />
          return (
            <SvgImage
              icon={"newsfeedIcon"}
              height={20}
              width={20}
              color={tintColor}
            />
          );
        } else if (routeName === "More") {
          iconName = AssetsImages.more;
        }

        return (
          <Image
            style={{ width: 30, height: 25, tintColor: tintColor }}
            source={iconName}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: BuildConfig.menu_icon_color,
      inactiveTintColor: "gray"
    }
  }
);
