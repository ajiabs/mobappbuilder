import React from 'react';
import { View, Text,Image,ActivityIndicator } from 'react-native';
import { AssetsImages } from '../assets/images';
import { BuildConfig } from '../config';
import { Styles } from '../assets/css/styles';

export default class ContactUs extends React.Component {
  static navigationOptions = {
    title: 'ContactUs',
  };
  constructor(props) {
    super(props);
    this.state ={ isLoading: true}
  }


  componentDidMount(){
      
    var data = {
      token_id: BuildConfig.token_id,
    };
    return fetch('https://mobapp.iscriptsdemo.com/api/general-settings/getGeneralSettings',
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

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }




  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: '50%'}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={[Styles.menu_bar,Styles.page_background_color]}>
        <Text style={[Styles.back]}  onPress={() => this.props.navigation.navigate('More')}>Back</Text>

       <Text style={[Styles.inner_header]}>Contact Us</Text>
        <View style={[Styles.inner_header_container]}>
        <View style={[Styles.contact_us_row]}>
          <Image  source={AssetsImages.location}  style={[Styles.contact_us_row_image]}/>
          <Text style={[Styles.contact_us_text,Styles.contact_us_text_first,Styles.page_text_color]}>
            {this.state.dataSource.contact_address}
          </Text>
        </View>
        <View style={[Styles.contact_us_row]}>
          <Image  source={AssetsImages.phone}  style={[Styles.contact_us_row_image]}/>
          <Text style={[Styles.contact_us_text,Styles.page_text_color]}>
          {this.state.dataSource.contact_phone_no}
          </Text>
        </View>
        <View style={[Styles.contact_us_row]}>
          <Image  source={AssetsImages.email}  style={[Styles.contact_us_row_image]}/>
          <Text style={[Styles.contact_us_text,Styles.page_text_color]}>   {this.state.dataSource.contact_email}</Text>
        </View>
        <Text style={[Styles.contact_us_connect,Styles.page_text_color]}>Connect With Us</Text>
        <View style={[Styles.contact_us_row]}>
        
          <Image  source={AssetsImages.facebook}   style={[Styles.contact_us_social_image]}/>
          <Image  source={AssetsImages.google_plus}  style={[Styles.contact_us_social_image]}/>
          <Image  source={AssetsImages.twitter}  style={[Styles.contact_us_social_image]}/>
        </View>
       
       
       
       
            
        </View>
      </View>
    );
  }
}

