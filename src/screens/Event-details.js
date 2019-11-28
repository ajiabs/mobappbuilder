import React from 'react';
import { View, Text ,Dimensions,ScrollView,Image} from 'react-native';
import { Styles } from '../assets/css/styles';
import { AssetsImages } from '../assets/images';
import { BuildConfig } from '../config';
let { width } = Dimensions.get('window');
export default class EventDetails extends React.Component {
  constructor(props) {
    super(props);
  
  }

  render() {

    const { navigation } = this.props;
    return (
      <View style={[Styles.menu_bar,Styles.page_background_color]}>
        <Text style={[Styles.back,Styles.page_text_color]}  onPress={() => this.props.navigation.navigate('Events')}>Back</Text>
         <Text style={[Styles.inner_header,Styles.page_text_color]}>Events</Text>
      
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
             </ScrollView>
         </View>


      </View>
    );
  }
}

