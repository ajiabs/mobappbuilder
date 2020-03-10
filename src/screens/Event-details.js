import React from "react";
import { Alert, Dimensions, Image, ScrollView, Text, View } from "react-native";
import RNPaypal from "react-native-paypal-lib";
import { Styles } from "../assets/css/styles";
import { AssetsImages } from "../assets/images";
import { BuildConfig } from "../config";
import { APIEndpoints } from "../config/ApiEndpoints";
let { width } = Dimensions.get("window");
export default class EventDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paypal_client_id: ""
    };
  }
  simpleAlertHandlerSuccess = () => {
    //function to make simple alert
    Alert.alert(
      //title
      "Payment Success",
      //body
      "Thank You for Funding the Event.",
      [
        {
          text: "OK",
          onPress: () => console.log("No Pressed"),
          style: "cancel"
        }
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
    );
  };
  simpleAlertHandlerError = () => {
    //function to make simple alert
    Alert.alert(
      //title
      "Payment Failed!",
      //body
      "Payment Failed,Please try Later.",
      [
        {
          text: "OK",
          onPress: () => console.log("No Pressed"),
          style: "cancel"
        }
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
    );
  };
  paypalCall = () => {
    //alert("Here");
    RNPaypal.paymentRequest({
      clientId: this.state.paypal_client_id,
      environment: RNPaypal.ENVIRONMENT.SANDBOX,
      intent: RNPaypal.INTENT.SALE,
      price: 60,
      currency: "USD",
      description: `Android testing`,
      acceptCreditCards: true
    })
      .then(response => {
        console.log(response.response.state);
        if (response.response.state == "approved" && response.response.id) {
          this.simpleAlertHandlerSuccess();
        } else {
          this.simpleAlertHandlerError();
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.props);
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

  LoadingPayPalButton() {
    console.log("LoadingPayPalButton");
    this.props.navigation.navigate("Donation")
    // if (this.state.paypal_client_id) {
    //   return (
    //     <Button
    //       title="Fund This Event"
    //       onPress={() => this.PayPalPayamentPage()}
    //     />
    //   );
    // }
  }

  PayPalPayamentPage() {
    //alert("Donate Page");
    const { navigation } = this.props;

    var item = {
      events_id: navigation.getParam("events_id"),
      title: navigation.getParam("title")
    };

    navigation.navigate("EventPayment", item);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={[Styles.menu_bar, Styles.page_background_color]}>
        <Text
          style={[Styles.back, Styles.page_text_color]}
          onPress={() => this.props.navigation.navigate("Events")}
        >
          Back
        </Text>
        <Text style={[Styles.inner_header]}>Events</Text>

        <View style={[Styles.inner_header_container]}>
          <ScrollView
            style={[Styles.scrollview]}
            showsVerticalScrollIndicator={false}
          >
            <Text style={[Styles.event_detail_heading, Styles.page_text_color]}>
              {navigation.getParam("title")}
            </Text>
            <Text
              style={[Styles.event_detail_description, Styles.page_text_color]}
            >
              {navigation.getParam("summary")}
            </Text>
            <View style={[Styles.event_row]}>
              <Image
                source={AssetsImages.location}
                style={[Styles.event_row_image]}
              />
              <Text style={[Styles.event_row_text, Styles.page_text_color]}>
                {navigation.getParam("location")}
              </Text>
            </View>

            {/* <Text
              style={Styles.customDonateText}
              onPress={() => this.LoadingPayPalButton()}
            >
              DONATE
            </Text> */}
            {/* <Text> {'\n'}</Text> */}

            {/* {this.LoadingPayPalButton()} */}
          </ScrollView>
        </View>
      </View>
    );
  }
}
