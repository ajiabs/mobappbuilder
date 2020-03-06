// flow

import React, { Component } from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Text,
  TextInput,
  ScrollView,
  Image,
  View,
  Alert,
  RefreshControl
} from "react-native";
import { Card } from "react-native-elements";
import { AssetsImages } from "../assets/images";
import styles from "../assets/css/styles_donation";
// import {Font, FontSize} from '../utils';
import RNPaypal from "react-native-paypal-lib";
import { BuildConfig } from "../config";
import { SuccessView } from "../screens/SuccessView";
import { FailureView } from "../screens/FailureView";

// import Snackbar from 'react-native-snackbar';
// import ContentLoader, {Rect, Circle} from 'react-content-loader/native';

type Props = {};

type State = {
  loading: boolean,
  token: String,
  dollarAmountToPay: String,
  selectedItem: String,
  paypal_client_id: String,
  visbltyCntntLdr: boolean,
  isFocused1: boolean,
  isFocused2: boolean,
  isFocused3: boolean,
  isFocused4: boolean,
  dollarAmountArray: Array<any>,
  isFocused5: boolean,
  isRefreshing: boolean,
  notfctnArray: Array<any>
};

export class Donation extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      selectedItem: "",
      paypal_client_id: "",
      dollarAmountToPay: "",
      isFocused1: false,
      isFocused2: false,
      isFocused3: false,
      isFocused4: false,
      isFocused5: false,
      token: "",
      isRefreshing: false,
      visbltyCntntLdr: false,
      dollarAmountArray: [
        { data: "$5", id: "1", value: "5" },
        { data: "$10", id: "2", value: "10" },
        { data: "$15", id: "3", value: "15" },
        { data: "$20", id: "4", value: "20" },
        { data: "$25", id: "5", value: "25" }
      ],
      notfctnArray: [
        { data: "one" },
        { data: "two" },
        { data: "three" },
        { data: "four" },
        { data: "five" },
        { data: "six" }
      ]
    };
  }

  componentDidMount() {
    var data = {
      token_id: BuildConfig.token_id
    };
    console.log(JSON.stringify(data));
    return fetch("https://mobapp.iscriptsdemo.com/api/events/getPayPalId", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson["paypal_client_id"] != undefined) {
          console.log(responseJson["paypal_client_id"]);
          this.setState({
            paypal_client_id: responseJson["paypal_client_id"]
          });
        } else {
          this.setState({
            paypal_client_id: ""
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  async goBack() {
    console.warn("onPress");
  }
  onPressHandler(id, value) {
    this.textInput.clear();
    this.setState({ selectedItem: id, dollarAmountToPay: value });
  }

  handleTextChange = text => {
    this.setState({ dollarAmountToPay: text });
  };

  render() {
    return (
      <ScrollView style={styles.scrollviewStyle}
      contentContainerStyle={{ paddingBottom: 10 }}>
        <View style={styles.container}>
          <StatusBar
            translucent
            backgroundColor="rgba(0,0,0,0)"
            barStyle="light-content"
          />
          <View contentContainerstyStyle={styles.container}>
            <View style={styles.headerView}>
              <View style={styles.titleView}>
                <TouchableOpacity
                  style={{ width: "20%" }}
                  onPress={() => {
                    this.props.navigation.goBack();
                  }}
                >
                  <Image
                    source={AssetsImages.left_arrow}
                    style={[styles.back_arrow]}
                  />
                </TouchableOpacity>

                <Text style={styles.title}>Donation</Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.onetimeText}>ONE TIME</Text>
                <View style={styles.horiListBg}>
                  <FlatList
                    style={{ margin: 5, marginTop: 0 }}
                    contentContainerStyle={{
                      flex: 1,
                      justifyContent: "center"
                    }}
                    extraData={this.state.selectedItem} //Must implemented
                    horizontal={true}
                    data={this.state.dollarAmountArray}
                    keyExtractor={item => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                    //   renderItem={({ item, index }) =>
                    //   this.renderDollarAmountItem(item, index)
                    // }
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => this.onPressHandler(item.id, item.value)}
                      >
                        <Card
                          // style={{ margin: -10 , padding: -10 }}
                          containerStyle={
                            this.state.selectedItem === item.id
                              ? {
                                  borderRadius: 5,
                                  elevation: 0,
                                  margin: 5,
                                  padding: 10,
                                  alignSelf: "center",
                                  flex: 1,
                                  justifyContent: "center",
                                  // width:'100%',
                                  // backgroundColor: "transparent",
                                  borderWidth: 0, //no effect
                                  shadowColor: "transparent", //no effect
                                  borderBottomColor: "transparent",
                                  borderTopColor: "transparent",
                                  backgroundColor: "#134697"
                                }
                              : {
                                  borderRadius: 5,
                                  elevation: 0,
                                  // backgroundColor: "transparent"
                                  // width:'100%',
                                  backgroundColor: "transparent",
                                  margin: 5,
                                  padding: 10,
                                  alignSelf: "center",
                                  flex: 1,
                                  justifyContent: "center",
                                  borderWidth: 0, //no effect
                                  shadowColor: "transparent", //no effect
                                  borderBottomColor: "transparent",
                                  borderTopColor: "transparent"
                                }
                          }
                        >
                          <Text
                            // style={{ color: "white", margin: 0, fontSize: 18 }}
                            style={styles.dollarTextNew}
                          >
                            {item.data}
                          </Text>
                          {/* <Text
                       // style={{color: 'white'}}
                          // style={
                          //   this.state.isFocused1
                          //     ? (style = styles.dollarTextWhenFocus)
                          //     : (style = styles.dollarText)
                          // }
                          onPress={() => {
                            this.setState({
                              isFocused1: true,
                              isFocused2: false,
                              isFocused3: false,
                              isFocused4: false,
                              isFocused5: false
                            });
                          }}
                        >
                          {item.data}
                        </Text> */}
                        </Card>
                      </TouchableOpacity>
                    )}
                  />

                  {/* <FlatList
                  data={this.state.dollarAmountArray}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) =>
                    this.renderDollarAmountItem(item, index)
                  }
                  horizontal={true}
                /> */}
                </View>
                <TextInput
                  style={styles.customAmountText}
                  keyboardType="numeric"
                  ref={input => {
                    this.textInput = input;
                  }}
                  onChangeText={text => this.handleTextChange(text)}
                  // value={this.state.dollarAmountToPay}

                  onFocus={() => {
                    {
                      console.log("onFocus");
                    }
                    this.setState({ selectedItem: "", dollarAmountToPay: "" });
                  }}
                  placeholder="Custom Amount"
                  placeholderTextColor="#768BA7"
                ></TextInput>
              </View>
            </View>
            <TouchableOpacity
              style={styles.payNowTextTouchableOpacity}
              onPress={() => {
                this.gotoPaypalPaymentGateway();
              }}
            >
              <Text style={styles.payNowText}>PAY NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
        <SuccessView
          ref={ref => {
            this.successview = ref;
          }}
        />
        <FailureView
          ref={ref => {
            this.failureview = ref;
          }}
        />
      </ScrollView>
    );
  }

  gotoPaypalPaymentGateway = () => {
    console.warn("amount  " + this.state.dollarAmountToPay);
    if (
      this.state.dollarAmountToPay != undefined &&
      this.state.dollarAmountToPay.trim() != ""
    ) {
      var totalPrice = parseInt(this.state.dollarAmountToPay);
      RNPaypal.paymentRequest({
        // clientId: 'ASo31Vu1lEVVVuYuOe61ynzhqDFRtP2znoSufGOTzjrPvcN11Y9QrI-olbLjB68TpAY5lq2t8b87Youg',
        clientId: this.state.paypal_client_id,
        environment: RNPaypal.ENVIRONMENT.NO_NETWORK,
        intent: RNPaypal.INTENT.SALE,
        price: totalPrice,
        currency: "USD",
        description: `Android testing`,
        acceptCreditCards: true
      })
        .then(response => {
          console.log(response);
          this.successview.show(true);
        })
        .catch(err => {
          console.log(err.message);
          const substring = "User cancelled";
          if (err.message.includes(substring)) {
          } else {
            this.failureview.show(true, "1234567890");
          }
        });
    } else {
      Alert.alert("Please select or input an amount.");
    }
  };

  renderDollarAmountItem = (item, index) => (
    <TouchableOpacity>
      <Text
        style={
          this.state.isFocused1
            ? (style = styles.dollarTextWhenFocus)
            : (style = styles.dollarText)
        }
        onPress={() => {
          this.setState({
            isFocused1: true,
            isFocused2: false,
            isFocused3: false,
            isFocused4: false,
            isFocused5: false
          });
        }}
      >
        {item.data}
      </Text>
      <Text
        style={
          this.state.isFocused2
            ? (style = styles.dollarTextWhenFocus)
            : (style = styles.dollarText)
        }
        onPress={() => {
          this.setState({
            isFocused1: false,
            isFocused2: true,
            isFocused3: false,
            isFocused4: false,
            isFocused5: false
          });
        }}
      >
        {item.data}
      </Text>
      <Text
        style={
          this.state.isFocused3
            ? (style = styles.dollarTextWhenFocus)
            : (style = styles.dollarText)
        }
        onPress={() => {
          this.setState({
            isFocused1: false,
            isFocused2: false,
            isFocused3: true,
            isFocused4: false,
            isFocused5: false
          });
        }}
      >
        {item.data}
      </Text>
      <Text
        style={
          this.state.isFocused4
            ? (style = styles.dollarTextWhenFocus)
            : (style = styles.dollarText)
        }
        onPress={() => {
          this.setState({
            isFocused1: false,
            isFocused2: false,
            isFocused3: false,
            isFocused4: true,
            isFocused5: false
          });
        }}
      >
        {item.data}
      </Text>
      <Text
        style={
          this.state.isFocused5
            ? (style = styles.dollarTextWhenFocus)
            : (style = styles.dollarText)
        }
        onPress={() => {
          this.setState({
            isFocused1: false,
            isFocused2: false,
            isFocused3: false,
            isFocused4: false,
            isFocused5: true
          });
        }}
      >
        {item.data}
        {console.warn("hhjjjjjj")}
      </Text>
    </TouchableOpacity>
  );

  onRefresh = () => {
    this.setState(
      {
        isRefreshing: true,
        visbltyCntntLdr: true
      },
      () => {
        this.apiNotifications();
      }
    );
  };
}
