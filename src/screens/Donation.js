// flow

import React, { Component } from "react";
import { Alert, FlatList, Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-elements";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import RNPaypal from "react-native-paypal-lib";
import styles from "../assets/css/styles_donation";
import { AssetsImages } from "../assets/images";
import { BuildConfig } from "../config";
import { APIEndpoints } from "../config/ApiEndpoints";
import { FailureView } from "../screens/FailureView";
import { SuccessView } from "../screens/SuccessView";

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


const validateFields = (email, name) => {
  let emailError = '';
  let nameError = '';
  let validationStatus = true;
  if (email === undefined || email.trim() === '') {
    emailError = 'Please enter email';
    validationStatus = false;
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    emailError = 'Please enter a valid email address';
    validationStatus = false;

  }
  if (name === undefined || name.trim() === '') {
    nameError = 'Please enter name';
    validationStatus = false;

  }
  return {emailError: emailError, nameError: nameError,  validationStatus: validationStatus};
};

export class Donation extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      selectedItem: "",
      paypal_client_id: "",
      dollarAmountToPay: "",
      name: '',
      email: '',
      nameError: '',
      emailError: '',
      isFocused1: false,
      isFocused2: false,
      isFocused3: false,
      isFocused4: false,
      isFocused5: false,
      token: "",
      isRefreshing: false,
      visbltyCntntLdr: false,
      dollarAmountArray: BuildConfig.donationAmountArray,
    };
  }


  componentDidMount() {
  console.warn("dollararray"+ BuildConfig.donationAmountArray)

    var data = {
      token_id: BuildConfig.token_id
    };
    console.log(JSON.stringify(data));
    return fetch(APIEndpoints.GET_PAY_ID, {
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

  amountScrollToNext = () => {
    this.amountFlatList.scrollToEnd({animated: true})
  } 

  amountScrollToBack = () => {
    this.amountFlatList.scrollToOffset({offset: 0, animated: true});
  }

  render() {
    return (
      <ScrollView
        style={styles.scrollviewStyle}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
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

                <Text style={styles.title}>Payment Information</Text>
              </View>

              {this.renderUserDataInputArea()}

              <View style={styles.card}>
                <Text style={styles.onetimeText}>One Time</Text>
                <View style={styles.horiListBg}>
                  <TouchableOpacity style={styles.arrowButtonContainer} onPress={this.amountScrollToBack}>
                    <Icon name="chevron-left" size={30} color="white" />
                  </TouchableOpacity>
                  <FlatList
                    ref={ref => this.amountFlatList = ref}
                    style={{ margin: 5, marginTop: 0 }}
                    extraData={this.state.selectedItem}
                    horizontal={true}
                    scrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.dollarAmountArray}
                    keyExtractor={item => String(item.id)}
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
                                  borderWidth: 0, //no effect
                                  shadowColor: "transparent", //no effect
                                  borderBottomColor: "transparent",
                                  borderTopColor: "transparent",
                                  backgroundColor: "#134697"
                                }
                              : {
                                  borderRadius: 5,
                                  elevation: 0,
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
                            style={styles.dollarTextNew}
                          >
                            {item.data}
                          </Text>
                        </Card>
                      </TouchableOpacity>
                    )}
                  />

                <TouchableOpacity style={styles.arrowButtonContainer} onPress={this.amountScrollToNext}>
                    <Icon name="chevron-right" size={30} color="white" />
                </TouchableOpacity>
                </View>
                <TextInput
                  style={styles.customAmountText}
                  keyboardType="numeric"
                  ref={input => {
                    this.textInput = input;
                  }}
                  onChangeText={text => this.handleTextChange(text)}
                  value={this.state.dollarAmountToPay}
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
              <Text style={styles.payNowText}>Donate With PayPal</Text>
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

  renderUserDataInputArea=()=> {
    return(
      <View style={{marginTop: 20}}>
        <TextInput
        style={styles.userDataTextInput}

        onChangeText={text => this.setState({name: text, nameError:''})}
        value={this.state.name}
        placeholder="Name"
        placeholderTextColor="#768BA7"
      ></TextInput>
      {this.renderTextErrorView(this.state.nameError, this.state.nameError)}
      <TextInput
        style={styles.userDataTextInput}
        keyboardType= "email-address"
        onChangeText={text => this.setState({email:text, emailError: ''})}
        value={this.state.email}
        placeholder="Name"
        placeholderTextColor="#768BA7"
      ></TextInput>
      {this.renderTextErrorView(this.state.nameError, this.state.emailError)}
      </View>
    )
  }

  renderTextErrorView = (value, text) => {
    if (true) {
       return <Text style={styles.errorText}>{text}</Text>
    }else{
      return null
    }
  }
  

  gotoPaypalPaymentGateway = () => {
    const {name , email} = this.state;
    let validationResponse = validateFields(email, name);
    if(validationResponse.validationStatus){
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
            console.log(response.response.id);
            this.sendPaymentInfo(
              this.state.email,
              this.state.name,
              this.state.dollarAmountToPay,
              response.response.id
            );
            this.setState({
              dollarAmountToPay: ""
            });
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
    }else {
      this.setState({emailError: validationResponse.emailError, nameError: validationResponse.nameError })
    }
    
  };

  sendPaymentInfo = (email, name, amount, transaction_id) => {
    const { navigation } = this.props;
    var data = {
      email: email,
      name: name,
      amount: amount,
      transaction_id: transaction_id,
      created_user_id: BuildConfig.token_id,
      events_id: navigation.getParam("events_id")
    };

    return fetch(APIEndpoints.INSERT_PAYMENT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => {
      console.log(response);
    });
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
