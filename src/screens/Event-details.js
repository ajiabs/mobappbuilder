import React from 'react';
import { View, Text ,Dimensions,ScrollView,Image,TouchableOpacity,Button,Alert} from 'react-native';
import { Styles } from '../assets/css/styles';
import { AssetsImages } from '../assets/images';
import { BuildConfig } from '../config';
import RNPaypal from 'react-native-paypal-lib';
let { width } = Dimensions.get('window');
export default class EventDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      paypal_client_id: '',
      
    }; 
  
  }
  simpleAlertHandlerSuccess=()=>{
    //function to make simple alert
    Alert.alert(
      //title
      'Payment Success',
      //body
      'Thank You for Funding the Event.',
      [
        
        {text: 'OK', onPress: () => console.log('No Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
    );
  }
  simpleAlertHandlerError=()=>{
    //function to make simple alert
    Alert.alert(
      //title
      'Payment Failed!',
      //body
      'Payment Failed,Please try Later.',
      [
        
        {text: 'OK', onPress: () => console.log('No Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
    );
  }
  paypalCall = () => {
    //alert("Here");
    RNPaypal.paymentRequest({
      clientId: this.state.paypal_client_id,
      environment: RNPaypal.ENVIRONMENT.SANDBOX,
      intent: RNPaypal.INTENT.SALE,
      price: 60,
      currency: 'USD',
      description: `Android testing`,
      acceptCreditCards: true
  }).then(response => {
      console.log(response.response.state);
      if(response.response.state=="approved" && response.response.id){
        this.simpleAlertHandlerSuccess();
      }else{
        this.simpleAlertHandlerError();
      }
     
  }).catch(err => {
      console.log(err.message)
  })
  }

  componentDidMount() {
console.log("componentDidMount");
    var data = {
      token_id: BuildConfig.token_id,
    };
    console.log(JSON.stringify(data));
    return fetch('https://mobapp.iscriptsdemo.com/api/events/getPayPalId',
    {
    method: "POST",
    headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((responseJson) => {
      if(responseJson['paypal_client_id']!=undefined){
      console.log(responseJson['paypal_client_id']);
      this.setState({ 
        paypal_client_id:  responseJson['paypal_client_id'],
      }); 
      }else{
        this.setState({ 
          paypal_client_id:  '',
        }); 
      }

      })
      .catch((error) =>{
        console.error(error);
      });

  }

 LoadingPayPalButton() {
   if(this.state.paypal_client_id){
    return (
      <Button
            title="Fund This Event"
            onPress={() => this.paypalCall()}
          />
    );
  }
  }

  render() {

    const { navigation } = this.props;
    return (
      <View style={[Styles.menu_bar,Styles.page_background_color]}>
        <Text style={[Styles.back,Styles.page_text_color]}  onPress={() => this.props.navigation.navigate('Events')}>Back</Text>
         <Text style={[Styles.inner_header]}>Events</Text>
      
         <View style={[Styles.inner_header_container]}>
         <ScrollView style={[Styles.scrollview]} showsVerticalScrollIndicator={false}>
        
         
          
             <Text style={[Styles.event_detail_heading,Styles.page_text_color]}>{navigation.getParam('title')}</Text>
             <Text style={[Styles.event_detail_description,Styles.page_text_color]}>{navigation.getParam('summary')}</Text>
             <View style={[Styles.event_row]}>
              <Image  source={AssetsImages.location}  style={[Styles.event_row_image]}/>
              <Text style={[Styles.event_row_text,Styles.page_text_color]}>{navigation.getParam('location')}</Text>
            </View>
            
            <View style={[Styles.event_row]}>
              <Image  source={AssetsImages.time}  style={[Styles.event_row_image]}/>
              <Text style={[Styles.event_row_text,Styles.page_text_color]}>{navigation.getParam('time')}</Text>
            </View>




          
            {this.LoadingPayPalButton()}
         


             </ScrollView>
         </View>


      </View>
    );
  }
}

