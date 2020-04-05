import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import {AssetsImages} from '../../assets/images';
import {BuildConfig} from '../../config';
import {BASE_URL} from '../../config/ApiDomain';
import styles from './styles';
import {StackActions} from 'react-navigation';

export default class EventListingDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  LoadingPayPalButton = () => {
    const {navigation} = this.props;
    navigation.navigate('Donation', {
      events_id: navigation.getParam('events_id'),
    });
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
      <StatusBar
          translucent
           backgroundColor={'#3266B9'}
         // backgroundColor="rgba(0,0,0,0)"
          barStyle="light-content"
        />
        
        <ScrollView showsVerticalScrollIndicator={false}style={styles.bodyContainer}>
        <View style={styles.headerImgContainer}>
          <ImageBackground
            source={{
              uri: BASE_URL + navigation.getParam('file_path'),
            }}
            style={styles.backGroundimg}>
            <TouchableOpacity
              style={styles.backContainer}
              onPress={() =>
                //this.props.navigation.navigate('EventListing')
                //  this.props.navigation.goBack()
                {
                  this.props.navigation.goBack();
                  //   this.props.navigation.dispatch(StackActions.popToTop());
                }
              }>
              <Image
                style={styles.leftArrowimg}
                source={AssetsImages.leftArrow}></Image>
            </TouchableOpacity>
          </ImageBackground>
        </View>
          {this.renderDetails()}
          {this.renderDonateButton()}
        </ScrollView>
      </View>
    );
  }
  renderDetails() {
    const {navigation} = this.props;
    return (
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>
            {navigation.getParam('event_title')}
          </Text>
        </View>
        <View style={styles.subTextContainer}>
          <Image
            source={AssetsImages.location}
            style={styles.locationIcon}></Image>
          <Text style={styles.subText}>{navigation.getParam('location')}</Text>
        </View>
        <View style={styles.textContentContainer}>
          <Text style={styles.textDetails}>
            {navigation.getParam('event_summary')}
          </Text>
        </View>
      </View>
    );
  }
  renderDonateButton() {
    let donate = this.props.navigation.getParam('hasDonate');
    return donate ? (
      <TouchableOpacity
        onPress={() => this.LoadingPayPalButton()}
        style={styles.buttonContainer}>
        <Text style={styles.donateText}>DONATE</Text>
      </TouchableOpacity>
    ) : null;
  }
}
