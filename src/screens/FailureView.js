import PropTypes from "prop-types";
import React, { Component } from "react";
import { Image, Modal, StyleSheet, Text, View } from "react-native";
// import images from '../resources/images';
import { Font, FontSize } from "../utils";
import { AssetsImages } from "../assets/images";

type State = {
  transactionId: String
};

export class FailureView extends Component<Props, State> {
  static propTypes = {
    duration: PropTypes.number,
    text: PropTypes.string
  };

  static defaultProps = {
    duration: 3000,
    text: "Payment Failed"
  };

  constructor(props: any) {
    super(props);
    this.state = {
      transactionId: "",
      showFailure: false
    };
  }

  show = (visible: boolean, transactionId: String) => {
    const trnsctnID = `Transaction Id: ${this.state.transactionId} ${transactionId}`;

    this.setState(
      {
        showFailure: visible,
        transactionId: trnsctnID
      },
      () => {}
    );

    // this.setState({transactionId: uid[1]});

    this.invokeDismiss();
  };

  // show = (visible: boolean) => {
  //   this.setState({
  //     showFailure: visible,
  //   });
  //   this.invokeDismiss();
  // };

  invokeDismiss = () => {
    const { duration } = this.props;
    setTimeout(() => {
      this.setState({ showFailure: false });
    }, duration);
  };

  render() {
    const { text } = this.props;
    return (
      <Modal
        transparent={true}
        animationType={"slide"}
        visible={this.state.showFailure}
      >
        <View style={styles.mainContainer}>
          <View style={styles.greenView}>
            <Image
              source={AssetsImages.error}
              style={styles.error}
              resizeMode={"contain"}
            />
            <Text style={styles.text}>{text}</Text>
            {/* <Text
              style={styles.textTransactionId}
              value={this.state.transactionId}>
              {this.state.transactionId}
            </Text> */}
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  greenView: {
    height: 180,
    width: "80%",
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16
  },
  text: {
    fontSize: 18,
    fontFamily: Font.Medium,
    color: "#2A2A2A"
  },
  textTransactionId: {
    fontSize: 14,
    marginTop: 10,
    width: "60%",
    fontFamily: Font.Medium,
    color: "#2A2A2A"
  },
  tick: {
    height: 80,
    width: 80
  },
  error: {
    height: 80,
    tintColor: "#f44336",
    width: 80
  }
});
