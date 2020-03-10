import React from 'react';
import { View, Text ,Dimensions,ScrollView,Image,TouchableOpacity,Button,Alert,TextInput,Keyboard} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Styles } from '../assets/css/styles';
import { AssetsImages } from '../assets/images';
import { BuildConfig } from '../config';
import RNPaypal from 'react-native-paypal-lib';
import { APIEndpoints } from '../config/ApiEndpoints';
let { width } = Dimensions.get('window');
export default class EventPayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      paypal_client_id: '',
      name:'',
      email:'',
      amount:0
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

  sendPaymentInfo = (email,name,amount,transaction_id) => {

    const { navigation } = this.props;
    var data={
      email:email,
      name:name,
      amount:amount,
      transaction_id:transaction_id,
      created_user_id:BuildConfig.token_id,
      events_id:navigation.getParam('events_id')
    };

    return fetch(APIEndpoints.INSERT_PAYMENT,
    {
    method: "POST",
    headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    })

  }



  paypalCall = () => {
    //alert(this.state.amount);
    RNPaypal.paymentRequest({
      clientId: this.state.paypal_client_id,
      environment: RNPaypal.ENVIRONMENT.SANDBOX,
      intent: RNPaypal.INTENT.SALE,
      price: parseFloat(this.state.amount),
      currency: 'USD',
      description: 'Payment By '+this.state.email,
      acceptCreditCards: true
  }).then(response => {
      console.log(response.response.state);
      if(response.response.state=="approved" && response.response.id){

        this.sendPaymentInfo(this.state.email,this.state.name,this.state.amount,response.response.id);

        this.setState({ 
            email:  '',
            name:  '',
            amount:  '',
          });
        this.simpleAlertHandlerSuccess();
       

      }else{
       
        this.simpleAlertHandlerError();
       
      }
     
  }).catch(err => {
      console.log(err.message);
     
  })
  }

  componentDidMount() {
console.log("componentDidMount");
console.log(this.props);
    var data = {
      token_id: BuildConfig.token_id,
    };
    console.log(JSON.stringify(data));
    return fetch(APIEndpoints.GET_PAY_ID,
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
            title="Donate"
            onPress={() => this._onPressButton()}
          />
    );
  }
  }

  _onPressButton() {
    // Call ValidationComponent validate method
    if(this.state.name==''){
        alert("Please Enter Your Name");
        return false;
    }
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(this.state.name=='' || reg.test(this.state.email) !== true){
        alert("Please Enter a Valid Email");
        return false;
    }
    if(parseFloat(this.state.amount) == 0 || this.state.amount==''){
        alert("Please Enter a Amount greater than Zero");
        return false;
    }
   //alert("Success");
this.paypalCall();

//alert(this.state.amount);
//alert("Success");

  }
  

  render() {

    const { navigation } = this.props;
    return (
      <View style={[Styles.menu_bar,Styles.page_background_color]}>
        <Text style={[Styles.back,Styles.page_text_color]}  onPress={() => this.props.navigation.navigate('Events')}>Back</Text>
         <Text style={[Styles.inner_header]}>Donate To Events</Text>
      
         <View style={[Styles.inner_header_container]}>
         <ScrollView style={[Styles.scrollview]} showsVerticalScrollIndicator={false}>
        
         <Text style={[Styles.event_detail_heading,Styles.page_text_color]}>{navigation.getParam('title')}</Text>
          
         <View style={Styles.inputContainer}>
         <TextInput
           style={Styles.textInput}
           placeholder="Your name"
           maxLength={20}
           onChangeText={(name) => this.setState({name})}
           value={this.state.name}
           onBlur={Keyboard.dismiss}
         />
       </View>
       
       <View style={Styles.inputContainer}>
         <TextInput
           style={Styles.textInput}
           placeholder="Your Email"
           maxLength={50}
           onChangeText={(email) => this.setState({email})}
           value={this.state.email}
           onBlur={Keyboard.dismiss}
         />
       </View>     
       <View style={Styles.inputContainer}>
         <TextInput ref="name"
           style={Styles.textInput}
           placeholder="Amount($)"
           maxLength={20} keyboardType={'numeric'}
           onChangeText={(amount) => this.setState({amount})}
           value={this.state.amount}
           onBlur={Keyboard.dismiss}
         />
       </View>    
            <Text> {'\n'}</Text>

           
          
          <Text> {'\n'}</Text>

            {this.LoadingPayPalButton()}
         


             </ScrollView>
         </View>


      </View>
    );
  }
}

