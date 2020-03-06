import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { BuildConfig } from "../../config";
import styles from "./styles";
import { AssetsImages } from "../../assets/images";

export default class More extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.moreTitleContainer}>
            <Text style={styles.title}>More</Text>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          {this.renderAboutUs()}
          {this.renderContact()}
        </View>
      </View>
    );
  }
  renderAboutUs() {
    return (
      <TouchableOpacity
        style={styles.aboutContainer}
        onPress={() => this.props.navigation.navigate("AboutUs")}
      >
        <Text style={styles.aboutText}>About Us</Text>
        <View style={styles.aboutHorizontal}></View>
      </TouchableOpacity>
    );
  }
  renderContact() {
    return (
      <TouchableOpacity
        style={styles.contactContainer}
        onPress={() => this.props.navigation.navigate("ContactUs")}
      >
        <Text style={styles.contactText}>Contact Us</Text>
        <View style={styles.contactHorizontal}></View>
      </TouchableOpacity>
    );
  }
}
