import React from 'react';
import { View, Text,ScrollView,Image } from 'react-native';
import { Styles } from '../assets/css/styles';
import { AssetsImages } from '../assets/images';
import { BuildConfig } from '../config';

export default class AboutUs extends React.Component {
  static navigationOptions = {
    title: 'AboutUs',
  };
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <View style={[Styles.menu_bar,Styles.page_background_color]}>
       <Text style={[Styles.back,Styles.page_text_color]}  onPress={() => this.props.navigation.navigate('More')}>Back</Text>
       <Text style={[Styles.inner_header,Styles.page_text_color]}>About Us</Text>
      
      <View style={[Styles.inner_header_container]}>
      <ScrollView style={[Styles.scrollview]} showsVerticalScrollIndicator={false}>
      <Image  source={AssetsImages.about_logo}  style={[Styles.about_logo]}>
      </Image>
       <Text style={[Styles.page_text_color]}>We are happy to provide a free app maker 
       platform since 2019, for people who need a cost-free app creation for their 
       app building purposes. Anyone can create an android app for free and publish
        on Google Play Store with our free app maker. We also allow you to generate an 
        APK file for free. This way you can share your Android app with your friends or 
        co-workers. Our platform enables anyone to publish their app on Google Play
         (own developer account) without paying us a single dime! There is also no time
          limitation for your Android app. As long as you are not using your app for 
          commercial reasons, it's all free.We are happy to provide a free app maker
           platform since 2019, for people who need a cost-free app creation for their 
           app building purposes. Anyone can create an android app for free and publish 
           on Google Play Store with our free app maker. We also allow you to generate an
            APK file for free. This way you can share your Android app with your friends or
             co-workers. Our platform enables anyone to publish their app on Google Play
              (own developer account) without paying us a single dime! There is also no 
              time limitation for your Android app. As long as you are not 
           using your app for commercial reasons, it's all free.</Text>

      </ScrollView>

      </View>
      </View>
    );
  }
}

