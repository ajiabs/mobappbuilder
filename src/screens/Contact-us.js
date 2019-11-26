import React from 'react';
import { View, Text,Image } from 'react-native';
import { AssetsImages } from '../assets/images';
import { BuildConfig } from '../config';
import { Styles } from '../assets/css/styles';

export default class ContactUs extends React.Component {
  static navigationOptions = {
    title: 'ContactUs',
  };
  render() {
    return (
      <View style={[Styles.menu_bar,Styles.page_background_color]}>
        <Text style={[Styles.back,Styles.page_text_color]}  onPress={() => this.props.navigation.navigate('More')}>Back</Text>

       <Text style={[Styles.inner_header,Styles.page_text_color]}>Contact Us</Text>
        <View style={[Styles.inner_header_container]}>
        <View style={[Styles.contact_us_row]}>
          <Image  source={AssetsImages.location}  style={[Styles.contact_us_row_image]}/>
          <Text style={[Styles.contact_us_text,Styles.contact_us_text_first]}>Armia Systems Inc. 1020 Milwakee Ave,
#245 Deerfield IL 60015 US</Text>
        </View>
        <View style={[Styles.contact_us_row]}>
          <Image  source={AssetsImages.phone}  style={[Styles.contact_us_row_image]}/>
          <Text style={[Styles.contact_us_text]}>(312) 423-6728</Text>
        </View>
        <View style={[Styles.contact_us_row]}>
          <Image  source={AssetsImages.email}  style={[Styles.contact_us_row_image]}/>
          <Text style={[Styles.contact_us_text]}>info@armia.com</Text>
        </View>
        <Text style={{paddingTop:50,paddingLeft:15,fontSize:20}}>Connect With Us</Text>
        <View style={[Styles.contact_us_row]}>
        
          <Image  source={AssetsImages.facebook}   style={[Styles.contact_us_social_image]}/>
          <Image  source={AssetsImages.google_plus}  style={[Styles.contact_us_social_image]}/>
          <Image  source={AssetsImages.twitter}  style={[Styles.contact_us_social_image]}/>
        </View>
       
       
       
       
            
        </View>
      </View>
    );
  }
}

