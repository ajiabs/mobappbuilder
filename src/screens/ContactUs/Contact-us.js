import React from 'react';
import { View, Text,Image,ActivityIndicator,TouchableOpacity,Linking } from 'react-native';
import { AssetsImages } from '../../assets/images'
import { BuildConfig } from '../../config';
import { Styles } from '../../assets/css/styles';
import styles from './styles';
import { APIEndpoints } from '../../config/ApiEndpoints';
export default class ContactUs extends React.Component {
  static navigationOptions = {
    title: 'ContactUs',
  };
  constructor(props) {
    super(props);
    this.state ={ isLoading: true}
    this.getContactDetails()
  }


  
  getContactDetails = () => {
    var data = {
      token_id: BuildConfig.token_id,
    };
    return fetch(APIEndpoints.GET_SETTINGS,
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
        console.log("zzzzzzzz" + JSON.stringify(responseJson));
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

  handleContactAction = (action, contactData) => {
    if (action === 'phone') {
      Linking.openURL(`tel:${contactData}`);
    } else if (action === 'email') {
      Linking.openURL(`mailto:${contactData}`);
    } else if (action === 'url'){
      Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${contactData}`);
    }else if (action = 'social') {
      if(contactData) { 
        Linking.canOpenURL(contactData)
          .then((supported) => {
            if (!supported) {
              console.log("Can't handle url: " + contactData);
            } else {
                return Linking.openURL(contactData);
            }
          })
          .catch((err) => console.log('An error occurred', err));
      }
    }
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
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity style={styles.backArrowContainer}
          onPress={() =>
          this.props.navigation.navigate('More')}>
            <Image source={AssetsImages.left_arrow} style={styles.backArrow}></Image>
             
          </TouchableOpacity>
          <View style={styles.hedingContainer}> 
            <Text style={styles.title}>Contact Us</Text>
          </View>
        </View> 




        <View style={styles.bodyContainer}>
            {this.renderContent()}
            {(this.state.dataSource.twitter_url || this.state.dataSource.facebook_url ) ? this.renderConnectWith(): null}
          </View>
      </View>
    );
  }
  renderContent() {
    return(
      <View>
        <TouchableOpacity onPress= {()=> this.handleContactAction('url',this.state.dataSource.contact_address )} style={styles.locationContainer}> 
          <View style={styles.locationImgContainer}>
            <Image style={styles.locationImg} source={AssetsImages.location}></Image>
          </View>
          <View style={styles.locationTextContainer}>
            <Text style={styles.locationText} numberOfLines={3}>{this.state.dataSource.contact_address}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress = {()=> this.handleContactAction('phone', this.state.dataSource.contact_phone_no)} style={styles.phoneContainer}>
          <View style={styles.phoneImgContainer}>
            <Image source={AssetsImages.phone} style={styles.phoneImg}></Image>
          </View>
          <View style={styles.phoneTextContainer}>
            <Text style={styles.phoneText}>{this.state.dataSource.contact_phone_no}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress = {()=> this.handleContactAction('email', this.state.dataSource.contact_email)} 
          style={styles.emailContainer}
        >
          <View style={styles.emailImgContainer}>
            <Image source={AssetsImages.email} style={styles.emailImg}></Image>
          </View>
          <View style={styles.emailTextContainer}>
            <Text style={styles.emailText}>{this.state.dataSource.contact_email}</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
  renderConnectWith(){
    return(
      <View style={styles.connectWithUsContainer}>
        <View style={styles.connectTextContainer}>
          <Text style={styles.connectText}>Connect With Us</Text>
        </View>
        <View style={styles.imageContainer}>
          { this.state.dataSource.facebook_url ?  this.renderfacebookIcon() : null}
          {/* <View style={styles.googleContainer}> 
            <Image source={AssetsImages.googlePlus} style={styles.googleImg}></Image>
          </View> */}
          {this.state.dataSource.twitter_url ?  this.renderTwitterLink(): null}
        </View>
      </View>
    )
  }

  renderfacebookIcon = () => (
    <TouchableOpacity style={styles.fbContainer} onPress={()=> this.handleContactAction('social', this.state.dataSource.facebook_url)}>
      <Image source={AssetsImages.facebook} style={styles.fbImg}></Image>
    </TouchableOpacity> 
  )

  renderTwitterLink = () => (
    <TouchableOpacity style={styles.twitterContainer} onPress={()=> this.handleContactAction('social', this.state.dataSource.twitter_url)}>
            <Image source={AssetsImages.twitter} style={styles.twitterImg}>
            </Image>
    </TouchableOpacity>
  )

}

