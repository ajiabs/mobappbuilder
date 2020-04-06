// flow

import React, {Component} from 'react';
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  Button,
  StatusBar,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import RNPaypal from 'react-native-paypal-lib';
import styles from '../assets/css/styles_donation';
import {AssetsImages} from '../assets/images';
import {BuildConfig} from '../config';
import {APIEndpoints} from '../config/ApiEndpoints';
import {FailureView} from '../screens/FailureView';
import {SuccessView} from '../screens/SuccessView';
import SvgImage from '../assets/svgIcons';

// import Snackbar from 'react-native-snackbar';
// import ContentLoader, {Rect, Circle} from 'react-content-loader/native';

type Props = {};

type State = {
  loading: boolean,
  disableDonateButton: boolean,
  amountFocused: boolean,
  token: String,
  dollarAmountToPay: String,
  amountToPayPalPay: number,
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
  notfctnArray: Array<any>,
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
  return {
    emailError: emailError,
    nameError: nameError,
    validationStatus: validationStatus,
  };
};

export class Donation extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      disableDonateButton: true,
      amountFocused: false,
      selectedItem: '',
      paypal_client_id: '',
      dollarAmountToPay: '',
      amountToPayPalPay: 0,
      name: '',
      email: '',
      nameError: '',
      emailError: '',
      isFocused1: false,
      isFocused2: false,
      isFocused3: false,
      isFocused4: false,
      isFocused5: false,
      token: '',
      isRefreshing: false,
      visbltyCntntLdr: false,
      dollarAmountArray: BuildConfig.payment_splits,
      // dollarAmountArray: [
      //   { data: "$5", id: "1", value: "5" },
      //   { data: "$10", id: "2", value: "10" },
      //   { data: "$15", id: "3", value: "15" },
      //   { data: "$20", id: "4", value: "20" },
      //   { data: "$25", id: "5", value: "25" }
      // ],
    };
  }

  componentDidMount() {
    var data = {
      token_id: BuildConfig.token_id,
    };
    return fetch(APIEndpoints.GET_PAY_ID, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log('GET_PAYPal_ID response' + JSON.stringify(responseJson));
        if (responseJson['payment_splits'] != undefined) {
          this.setState({
            dollarAmountArray: responseJson.payment_splits,
            disableDonateButton: false,
          });
        }
        if (responseJson['paypal_client_id'] != undefined) {
          this.setState({
            paypal_client_id: responseJson['paypal_client_id'],
          });
        } else {
          this.setState({
            paypal_client_id: '',
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  async goBack() {
    console.warn('onPress');
  }

  onPressHandler = item => {
    this.setState(
      {selectedItem: item, dollarAmountToPay: item, amountFocused: true},
      () => {},
    );
  };

  handleTextChange = (text: any) => {
    this.setState({dollarAmountToPay: text});
    if (text.length >= 1) {
      this.setState({amountFocused: true});
    } else {
      this.setState({amountFocused: false});
    }
  };

  amountScrollToNext = () => {
    this.amountFlatList.scrollToEnd({animated: true});
  };

  amountScrollToBack = () => {
    this.amountFlatList.scrollToOffset({offset: 0, animated: true});
  };

  render() {
    return (
      <ScrollView
        style={styles.scrollviewStyle}
        contentContainerStyle={{paddingBottom: 10}}>
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
                  style={{width: '20%'}}
                  onPress={() => {
                    this.props.navigation.goBack();
                  }}>
                  <Image
                    source={AssetsImages.left_arrow}
                    style={[styles.back_arrow]}
                  />
                </TouchableOpacity>

                <Text style={styles.title}>Payment Information</Text>
              </View>

              {this.renderUserDataInputArea()}

              <View style={styles.card}>
                <Text style={styles.onetimeText}>Select Amount</Text>
                <View style={styles.horiListBg}>
                  <TouchableOpacity
                    style={styles.arrowButtonContainer}
                    onPress={this.amountScrollToBack}>
                    {/* <Icon name="chevron-left" size={30} color="white" /> */}
                    <SvgImage
                      icon={'leftarrow'}
                      height={30}
                      width={20}
                      color={'#ffffff'}
                    />
                  </TouchableOpacity>

                  <FlatList
                    ref={ref => (this.amountFlatList = ref)}
                    style={{margin: 5, marginTop: 0}}
                    extraData={this.state}
                    horizontal={true}
                    scrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.dollarAmountArray}
                    keyExtractor={item => String(item)}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => {
                          this.onPressHandler(item);
                        }}>
                        <Card
                          // style={{ margin: -10 , padding: -10 }}
                          containerStyle={
                            this.state.selectedItem === item
                              ? {
                                  borderRadius: 5,
                                  elevation: 0,
                                  margin: 5,
                                  padding: 10,
                                  alignSelf: 'center',
                                  flex: 1,
                                  justifyContent: 'center',
                                  borderWidth: 0, //no effect
                                  shadowColor: 'transparent', //no effect
                                  borderBottomColor: 'transparent',
                                  borderTopColor: 'transparent',
                                  backgroundColor: '#134697',
                                }
                              : {
                                  borderRadius: 5,
                                  elevation: 0,
                                  backgroundColor: 'transparent',
                                  margin: 5,
                                  padding: 10,
                                  alignSelf: 'center',
                                  flex: 1,
                                  justifyContent: 'center',
                                  borderWidth: 0, //no effect
                                  shadowColor: 'transparent', //no effect
                                  borderBottomColor: 'transparent',
                                  borderTopColor: 'transparent',
                                }
                          }>
                          {/* <Text style={styles.dollarTextNew}>{item.data}</Text> */}
                          <Text style={styles.dollarTextNew}>$ {item}</Text>
                        </Card>
                      </TouchableOpacity>
                    )}
                  />

                  <TouchableOpacity
                    style={styles.arrowButtonContainer}
                    onPress={this.amountScrollToNext}>
                    {/* <Icon name="chevron-right" size={30} color="white" /> */}
                    <SvgImage
                      icon={'rightarrow'}
                      height={30}
                      width={20}
                      color={'#ffffff'}
                    />
                  </TouchableOpacity>
                </View>

                <TextInput
                  // style={styles.customAmountText}
                  style={
                    this.state.amountFocused === true
                      ? styles.customAmountTextWhenFocus
                      : styles.customAmountText
                  }
                  keyboardType="numeric"
                  ref={input => {
                    this.textInput = input;
                  }}
                  onChangeText={text => this.handleTextChange(text)}
                  value={this.state.dollarAmountToPay + ''}
                  // extraData={this.state}
                  // onFocus={() => {
                  //   {
                  //     console.log('onFocus this.state.selectedItem'+this.state.selectedItem);
                  //     console.log('onFocus this.state.dollarAmountToPay'+this.state.dollarAmountToPay);
                  //   }
                  //   this.setState({
                  //     //selectedItem: '',
                  //    // dollarAmountToPay: '',
                  //     // amountFocused: true,
                  //   });
                  // }}
                  // onBlur={() => {
                  //   {
                  //     console.log('onBlur');
                  //   }
                  //   this.setState({
                  //     //  selectedItem: '',
                  //     // dollarAmountToPay: '',
                  //     // amountFocused: false,
                  //   });
                  // }}
                  placeholder="Amount"
                  // label="Email"
                  placeholderTextColor="#768BA7"
                />
              </View>
            </View>
            <TouchableOpacity
              disabled={this.state.disableDonateButton}
              style={styles.payNowTextTouchableOpacity}
              onPress={() => {
                if (this.state.dollarAmountToPay != undefined) {
                  console.log('just before gotoPaypalPaymentGateway');
                  this.gotoPaypalPaymentGateway();
                }
              }}>
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

  renderUserDataInputArea = () => {
    return (
      <View style={{marginTop: 20}}>
        <TextInput
          style={styles.userDataTextInput}
          onChangeText={text => this.setState({name: text, nameError: ''})}
          value={this.state.name}
          placeholder="Name"
          placeholderTextColor="#768BA7"></TextInput>
        {this.renderTextErrorView(this.state.nameError, this.state.nameError)}
        <TextInput
          style={styles.userDataTextInputEmail}
          keyboardType="email-address"
          onChangeText={text => this.setState({email: text, emailError: ''})}
          value={this.state.email}
          placeholder="Email"
          placeholderTextColor="#768BA7"></TextInput>
        {this.renderTextErrorView(this.state.nameError, this.state.emailError)}
      </View>
    );
  };

  renderTextErrorView = (value, text) => {
    if (true) {
      return <Text style={styles.errorText}>{text}</Text>;
    } else {
      return null;
    }
  };

  gotoPaypalPaymentGateway = () => {
    const {name, email} = this.state;
    let validationResponse = validateFields(email, name);
    if (validationResponse.validationStatus) {
      if (
        this.state.dollarAmountToPay != undefined &&
        this.state.dollarAmountToPay != ''
      ) {
        var totalPrice = parseInt(this.state.dollarAmountToPay);
        RNPaypal.paymentRequest({
          // clientId: 'ASo31Vu1lEVVVuYuOe61ynzhqDFRtP2znoSufGOTzjrPvcN11Y9QrI-olbLjB68TpAY5lq2t8b87Youg',
          // clientId:
          //   'AZbkGOMKAmLQniLO3X47HFgYruJFrux5w-6WJotAvdmFLIiy__Xsd8js1zptHCTGfNX9rboMxHMPD7pu',
          // clientId:
          //   'ASgUeT-SyUMfJMrwS5Sjij_6LKUOCuMTWZcwhU7Ixb5YmW-1aK3oZMH-URq9EanMXu_R71dbvvaVMQ3T',
          clientId: this.state.paypal_client_id,
          // environment: RNPaypal.ENVIRONMENT.SANDBOX,
          environment: RNPaypal.ENVIRONMENT.PRODUCTION,
          intent: RNPaypal.INTENT.SALE,
          price: totalPrice,
          currency: 'USD',
          description: `Android testing`,
          acceptCreditCards: true,
        })
          .then(response => {
            this.sendPaymentInfo(
              this.state.email,
              this.state.name,
              this.state.dollarAmountToPay,
              response.response.id,
            );
            this.setState({
              dollarAmountToPay: '',
              selectedItem: '',
            });
            this.successview.show(true);
          })
          .catch(err => {
            const substring = 'User cancelled';
            if (err.message.includes(substring)) {
            } else {
              this.failureview.show(true, '1234567890');
            }
          });
      } else {
        Alert.alert(
          'Please select an amount.',
          '',
          [{text: '🆗', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
        // Alert.alert('Please select an amount.');
      }
    } else {
      this.setState({
        emailError: validationResponse.emailError,
        nameError: validationResponse.nameError,
      });
    }
  };

  sendPaymentInfo = (email, name, amount, transaction_id) => {
    const {navigation} = this.props;
    var data = {
      email: email,
      name: name,
      amount: amount,
      transaction_id: transaction_id,
      created_user_id: BuildConfig.token_id,
      events_id: navigation.getParam('events_id'),
    };

    return fetch(APIEndpoints.INSERT_PAYMENT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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
            isFocused5: false,
          });
        }}>
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
            isFocused5: false,
          });
        }}>
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
            isFocused5: false,
          });
        }}>
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
            isFocused5: false,
          });
        }}>
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
            isFocused5: true,
          });
        }}>
        {item.data}
        {console.warn('hhjjjjjj')}
      </Text>
    </TouchableOpacity>
  );

  onRefresh = () => {
    this.setState(
      {
        isRefreshing: true,
        visbltyCntntLdr: true,
      },
      () => {
        this.apiNotifications();
      },
    );
  };
}
