import React from 'react';
import { View, Text,ScrollView,Image,ActivityIndicator } from 'react-native';
import { Styles } from '../assets/css/styles';
import { AssetsImages } from '../assets/images';
import { BuildConfig } from '../config';

export default class AboutUs extends React.Component {
  static navigationOptions = {
    title: 'AboutUs',
  };
  constructor(props) {
    super(props);
    this.state ={ isLoading: true}
  }

  


   componentDidMount(){
      
    var data = {
      token_id: BuildConfig.token_id,
      slug: 'about_us'
    };
    return fetch('https://mobapp.iscriptsdemo.com/api/pages/getPageContent',
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
          dataSource: responseJson.page_description,
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
       <Text style={[Styles.inner_header]}>About Us</Text>
      
      <View style={[Styles.inner_header_container]}>
      <ScrollView style={[Styles.scrollview]} showsVerticalScrollIndicator={false}>
      <Image  source={AssetsImages.about_logo}  style={[Styles.about_logo]}>
      </Image>
       <Text style={[Styles.page_text_color]}>
         {this.state.dataSource}
       </Text>

      </ScrollView>

      </View>
      </View>
    );
  }
}

