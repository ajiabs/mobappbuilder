import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { Styles } from "../assets/css/styles";
import { AssetsImages } from "../assets/images";
import { BuildConfig } from "../config";
import styles from "../assets/css/styles_about_us";
import { APIEndpoints } from "../config/ApiEndpoints";
import { BASE_URL } from "../config/ApiDomain";

 

export default class AboutUs extends React.Component {
  static navigationOptions = {
    title: "AboutUs"
  };
  constructor(props) {
    super(props);
    this.state = { isLoading: true, isImageLoading: true, headerTitle : '',imageURL : '',contentBody : ''};
  }

  componentDidMount() {
    var data = {
      token_id: BuildConfig.token_id,
      slug: "about_us"
    };
    console.warn("urllllllllllllllll   " + APIEndpoints.ABOUT_US);
    console.warn("JSON.stringify(data)   " + JSON.stringify(data));
    return fetch(APIEndpoints.ABOUT_US, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(responseJson => {
        console.warn("response   " + responseJson);
        console.warn("responsezzzzzzz   " + JSON.stringify(responseJson));
        console.warn("page_title   " + responseJson.page_title);
        this.setState(
          {
            isLoading: false,
            headerTitle: responseJson.data.page_title,
            imageURL: responseJson.data.file_path,
            contentBody: responseJson.data.page_description,
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: "50%" }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View   >
        <ScrollView 
        
        showsVerticalScrollIndicator={false}>
          <View style={styles.toolbar}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("More")}
            >
              <Image
                source={AssetsImages.left_arrow}
                style={[styles.back_arrow]}
              ></Image>
            </TouchableOpacity>

            <Text style={styles.title}>{this.state.headerTitle}</Text>
          </View>
          <View>

 {/* {this.state.isImageLoading ?  <ActivityIndicator
                        color="#3266B9"
                        size="large"
                        style={styles.active_rightside_text_red}
                      />: <Image
               source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
              style={[styles.about_us_image]}
              onLoad={() => console.log('onLoad')}
  onLoadStart={() => console.log('onLoadStart')}
  onLoadEnd={() =>this._onLoad }
            ></Image> 
             } */}

             {/* {this.state.isImageLoading ?  <ActivityIndicator
                        color="#3266B9"
                        size="large"
                        style={styles.active_rightside_text_red}
                      />: null
             } */}

            
             {this.state.isImageLoading ? <ActivityIndicator
                        color="#3266B9"
                        size="large"
                        style={styles.active_rightside_text_red}
                      />  : null
             }
             <Image
               source={{
          uri: BASE_URL + this.state.imageURL,
        }}
              style={[styles.about_us_image]}
              onLoad={() => console.log('onLoad')}
  onLoadStart={() => console.log('onLoadStart')}
  onLoadEnd={() =>this._onLoad() }
            ></Image>
          {/* {this.state.isImageLoading ?  <ActivityIndicator
                        color="#3266B9"
                        size="large"
                        style={styles.active_rightside_text_red}
                      />: <Image
              source={{
                uri: 'https://wallpapercave.com/wp/HeLC3lH.jpg'
                // BASE_URL + this.state.imageURL
              }}
              style={[styles.about_us_image]}
              onLoad={this._onLoad} 
            ></Image>
             } */}
            

            <Text style={styles.content}>{this.state.contentBody}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
  _onLoad = () => {
    console.warn("image ha loaded   " );
   this.setState(() => ({ isImageLoading: false }))
  }
}
