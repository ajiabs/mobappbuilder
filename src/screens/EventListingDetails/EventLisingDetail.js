import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { AssetsImages } from "../../assets/images";
import { BuildConfig } from "../../config";
import styles from "./styles";
import SvgImage from "../../assets/svgIcons";
const dummy = [{ data: "one" }, { data: "two" }, { data: "three" }];
export default class EventListingDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { navigation } = this.props;
  }

  LoadingPayPalButton() {
    this.props.navigation.navigate("Donation");
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headerImgContainer}>
          <ImageBackground
           source={{
            uri: "https://mobapp.iscriptsdemo.com/" + navigation.getParam("file_path")
          }}
            style={styles.backGroundimg}
        //  resizeMode="stretch"
          >
            <TouchableOpacity
              style={styles.backContainer}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Image
                style={styles.leftArrowimg}
                source={AssetsImages.leftArrow}
              ></Image>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <ScrollView style={styles.bodyContainer}>
          {this.renderDetails()}
          {this.renderDonateButton()}
        </ScrollView>
      </View>
    );
  }
  renderDetails() {
    const { navigation } = this.props;
    return (
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>{navigation.getParam("event_title")}</Text>
        </View>
        <View style={styles.subTextContainer}>
          <Image
            source={AssetsImages.location}
            style={styles.locationIcon}
          ></Image>
          <Text style={styles.subText}>{navigation.getParam("location")}</Text>
        </View>
        <View style={styles.textContentContainer}>
          <Text style={styles.textDetails}>
            {navigation.getParam("summary")}
          </Text>
        </View>
      </View>
    );
  }
  renderDonateButton() {
    return (
      <TouchableOpacity
        onPress={() => this.LoadingPayPalButton()}
        style={styles.buttonContainer}
      >
        <Text style={styles.donateText}>DONATE</Text>
      </TouchableOpacity>
    );
  }
}