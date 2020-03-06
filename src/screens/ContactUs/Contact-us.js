import React from 'react';
import { View, Text,Image,ActivityIndicator,TouchableOpacity } from 'react-native';
import { AssetsImages } from '../../assets/images'
import { BuildConfig } from '../../config';
import { Styles } from '../../assets/css/styles';
import styles from './styles';
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
            {this.renderConnectWith()}
          </View>
      </View>
    );
  }
  renderContent() {
    return(
      <View>
        <View style={styles.locationContainer}> 
          <View style={styles.locationImgContainer}>
            <Image style={styles.locationImg} source={AssetsImages.location}></Image>
          </View>
          <View style={styles.locationTextContainer}>
            <Text style={styles.locationText} numberOfLines={3}>{this.state.dataSource.contact_address}</Text>
          </View>
        </View>
        <View style={styles.phoneContainer}>
          <View style={styles.phoneImgContainer}>
            <Image source={AssetsImages.phone} style={styles.phoneImg}></Image>
          </View>
          <View style={styles.phoneTextContainer}>
            <Text style={styles.phoneText}>{this.state.dataSource.contact_phone_no}</Text>
          </View>
        </View>
        <View style={styles.emailContainer}>
          <View style={styles.emailImgContainer}>
            <Image source={AssetsImages.email} style={styles.emailImg}></Image>
          </View>
          <View style={styles.emailTextContainer}>
            <Text style={styles.emailText}>{this.state.dataSource.contact_email}</Text>
          </View>
        </View>
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
          <View style={styles.fbContainer}>
            <Image source={AssetsImages.facebook} style={styles.fbImg}></Image>
          </View>
          <View style={styles.googleContainer}> 
            <Image source={AssetsImages.googlePlus} style={styles.googleImg}></Image>
          </View>
          <View style={styles.twitterContainer}>
            <Image source={AssetsImages.twitter} style={styles.twitterImg}></Image>
          </View>
        </View>
      </View>
    )
  }

}

