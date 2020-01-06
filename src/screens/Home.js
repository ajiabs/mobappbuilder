import React from 'react';
import { View, Text,ImageBackground,Image,StyleSheet,Button,TouchableOpacity } from 'react-native';
import { AssetsImages } from '../assets/images';
import { BuildConfig } from '../config';
import { Styles } from '../assets/css/styles';


export default class Home extends React.Component {
  constructor(props){
    super(props);
   
  
  }
  render() {

    return (
     
     
      <View
      style={[Styles.container,Styles.page_background_color]}>
        {/* <Text style={[Styles.app_name,textColorStyles]}>
         {BuildConfig.app_name}
      </Text> */}
      {/* <Image  source={AssetsImages.logo}  style={Styles.logo}>
      </Image> */}
      <Text style={[Styles.main_heading]}>
       {BuildConfig.app_name}
      </Text>

      <Text style={[Styles.heading]}>
       {BuildConfig.app_overview}
      </Text>
      <TouchableOpacity
        style={[Styles.get_started]}
        onPress={() => this.props.navigation.navigate('Events')}
        >
           <Text style={[Styles.get_started_text]} > Get Started </Text>
       </TouchableOpacity>
    </View>

    );
  }

}
