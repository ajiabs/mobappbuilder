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

export default class AboutUs extends React.Component {
  static navigationOptions = {
    title: "AboutUs"
  };
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    var data = {
      token_id: BuildConfig.token_id,
      slug: "about_us"
    };
    return fetch("https://mobapp.iscriptsdemo.com/api/pages/getPageContent", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.page_description
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
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.toolbar}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("More")}
            >
              <Image
                source={AssetsImages.left_arrow}
                style={[styles.back_arrow]}
              ></Image>
            </TouchableOpacity>

            <Text style={styles.title}>About Us</Text>
          </View>
          <View>
            <Image
              source={AssetsImages.about_us_img}
              style={[styles.about_us_image]}
            ></Image>

            <Text style={styles.content}>{this.state.dataSource}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
