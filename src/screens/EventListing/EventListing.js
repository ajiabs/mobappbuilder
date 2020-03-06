import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { AssetsImages } from "../../assets/images";
import { BuildConfig } from "../../config";
import styles from "./styles";
const dummy = [{ data: "one" }, { data: "two" }, { data: "three" }];
var Data = [];
export default class EventListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DataItem: Data
    };
  }
  componentDidMount() {
    this.eventApi();
  }

  eventApi() {
    var data = {
      token_id: BuildConfig.token_id
    };
    return fetch("https://mobapp.iscriptsdemo.com/api/events/getEvents", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("responseJson", responseJson);

        var resData = [];
        var setDate = {};
        var newsetDate = {};
        if (responseJson.data != undefined) {
          this.setState({
            DataItem: responseJson.data
          });
          console.log(resData, "resData");
        }
      })
      .catch(error => {
        console.warn(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="rgba(0,0,0,0)"
          barStyle="light-content"
        />
        <View style={styles.headerView}>
          <Text style={styles.title}>Events</Text>
        </View>
        {/* {this.state.DataItem.length > 0 ? (
          <FlatList
            data={this.state.DataItem}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => this.renderEventList(item, index)}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={{ textAlign: "center", marginVertical: "25%" }}>
            No events yet to show
          </Text>
        )} */}
        <FlatList
            data={this.state.DataItem}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => this.renderEventList(item, index)}
            keyExtractor={item => item.id}
          />
      </View>
    );
  }
  renderEventList = (item, index) => (
    <View style={styles.eventListContainer}>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("EventListingDetail", item)
        }
      >
        <View style={styles.imageContainerStyle}>
          <Image
            source={{
              uri: "https://mobapp.iscriptsdemo.com/" + item.file_path
            }}
            style={styles.imageStyle}
          ></Image>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
        <View style={styles.bottomContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText} numberOfLines={2}>
              {item.event_title}
            </Text>
            <Text style={styles.subText} numberOfLines={2}>
              {item.location}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.donateContainer}
          onPress={() => this.props.navigation.navigate("Donation", item)}
        >
          <Text style={styles.donateText}>Donate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}