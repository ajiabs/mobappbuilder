// @flow
import React, {Component} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

type Props = {};

type State = {
  isConnected: boolean,
  animatedHeight: any,
};

export default class OfflineAlert extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isConnected: true,
      animatedHeight: new Animated.Value(0),
    };
    this.unsubscribe = undefined;
  }

  animateTo = (height: number) => {
    Animated.timing(this.state.animatedHeight, {
      toValue: height,
      duration: 2000,
    }).start();
  };

  componentDidMount() {
    NetInfo.fetch().then(state => {
      this.handleConnectivityChange(state.isConnected);
    });

    this.unsubscribe = NetInfo.addEventListener(state => {
      this.handleConnectivityChange(state.isConnected);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleConnectivityChange = (isConnected: boolean) => {
    if (isConnected) {
      this.setState({isConnected});
      this.animateTo(0);
    } else {
      this.setState({isConnected});
      this.animateTo(40);
    }
  };

  render() {
    const theColor = this.state.isConnected
      ? {backgroundColor: 'green'}
      : {backgroundColor: 'tomato'};
    const theMessage = this.state.isConnected
      ? 'Back Online'
      : 'No Internet Connection!';
    return (
      <Animated.View
        style={[
          styles.offlineContainer,
          theColor,
          {height: this.state.animatedHeight},
        ]}>
        <Text style={styles.offlineText}> {theMessage} </Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    bottom: 0,
    overflow: 'hidden',
  },
  offlineText: {color: '#fff'},
});
