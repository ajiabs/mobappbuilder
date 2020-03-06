import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { BuildConfig } from '../config';
import { Styles } from '../assets/css/styles';

export default class Settings extends React.Component {
  render() {
    return (
      <View style={[Styles.menu_bar,Styles.page_background_color]}>
         <Text style={[Styles.back,Styles.page_text_color]} ></Text>
       <Text style={[Styles.inner_header,Styles.page_text_color]}>Settings</Text>
      <View style={[Styles.inner_header_container]}>
         <Text style={[Styles.page_text_color,Styles.inner_content]}>Coming soon</Text>

      </View>
      </View>
    );
  }
}


