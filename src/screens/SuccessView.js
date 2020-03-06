import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Image, Modal, StyleSheet, Text, View} from 'react-native';
//import images from '../resources/images';
import {Font, FontSize} from '../utils';
import { AssetsImages } from "../assets/images";


export class SuccessView extends Component<Props, State> {
  static propTypes = {
    duration: PropTypes.number,
    text: PropTypes.string,
  };

  static defaultProps = {
    duration: 3000,
    text: 'Payment Success',
  };

  constructor(props: any) {
    super(props);
    this.state = {
      showSuccess: false,
    };
  }

  show = (visible: boolean) => {
    this.setState({
      showSuccess: visible,
    });
    this.invokeDismiss();
  };

  invokeDismiss = () => {
    const {duration} = this.props;
    setTimeout(() => {
      this.setState({showSuccess: false});
    }, duration);
  };

  render() {
    const {text} = this.props;
    return (
      <Modal
        transparent={true}
        animationType={'slide'}
        visible={this.state.showSuccess}>
        <View style={styles.mainContainer}>
          <View style={styles.greenView}>
            <Image
              source={AssetsImages.tic}
              style={styles.tick}
              resizeMode={'contain'}
            />
            <Text style={styles.text}>{text}</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  greenView: {
    height: 180,
    width: '80%',
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    fontFamily: Font.Medium,
    color: '#2A2A2A',
  },
  tick: {
    height: 80,
    width: 80,
  },
});