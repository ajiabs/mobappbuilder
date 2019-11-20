import React from 'react';
import { View, Text } from 'react-native';
import { BuildConfig } from '../config';

export default class More extends React.Component {
  render() {
    const backgroundColorStyles = {
      backgroundColor:  BuildConfig.background_color
    };
    const textColorStyles = {
      color:  BuildConfig.text_color
    };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>More Screen</Text>
      </View>
    );
  }
}

