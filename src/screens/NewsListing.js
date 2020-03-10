// flow

import React, { Component } from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
  Image,
  View,
  RefreshControl
} from "react-native";
import { AssetsImages } from "../assets/images";
import styles from "../assets/css/styles_news_feed";
// import {Font, FontSize} from '../utils';

import { BuildConfig } from "../config";
import { APIEndpoints } from "../config/ApiEndpoints";
import { BASE_URL } from "../config/ApiDomain";
// import Snackbar from 'react-native-snackbar';
// import ContentLoader, {Rect, Circle} from 'react-content-loader/native';

type Props = {};

type State = {
  loading: boolean,
  token: String,
  newsArray: Array<any>,
  visbltyCntntLdr: boolean,
  isRefreshing: boolean,
  notfctnArray: Array<any>
};

export class NewsListing extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      token: "",
      newsArray: [],
      isRefreshing: false,
      visbltyCntntLdr: false,
      notfctnArray: [
        { data: "one" },
        { data: "two" },
        { data: "three" },
        { data: "four" },
        { data: "five" },
        { data: "six" }
      ]
    };
  }

  componentDidMount() {
    this.apiNewsFeed();
  }

  async apiNewsFeed() {
    var data = {
      token_id: BuildConfig.token_id
    };
    return fetch(APIEndpoints.GET_NEWS, {
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
        if (responseJson.data != undefined) {
          this.setState({
            newsArray: responseJson.data
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        <StatusBar
          translucent
          backgroundColor="rgba(0,0,0,0)"
          barStyle="light-content"
        />
        <View contentContainerstyStyle={styles.container}>
          <View style={styles.headerView}>
            <Text style={styles.title}>News Feed</Text>

            {
              //this.state
              //   .visbltyCntntLdr ? null : //   <Rect x="2" y="332" rx="3" ry="3" width="350" height="6" /> //   <Rect x="4" y="309" rx="3" ry="3" width="85" height="6" /> //   <Rect x="5" y="276" rx="3" ry="3" width="201" height="6" /> //   <Rect x="5" y="256" rx="3" ry="3" width="305" height="6" /> //   <Rect x="5" y="236" rx="3" ry="3" width="350" height="6" /> //   <Rect x="7" y="213" rx="3" ry="3" width="85" height="6" /> //   <Rect x="4" y="181" rx="3" ry="3" width="201" height="6" /> //   <Rect x="4" y="161" rx="3" ry="3" width="305" height="6" /> //   <Rect x="4" y="141" rx="3" ry="3" width="350" height="6" /> //   <Rect x="6" y="118" rx="3" ry="3" width="85" height="6" /> //   <Rect x="7" y="85" rx="3" ry="3" width="201" height="6" /> //   <Rect x="7" y="65" rx="3" ry="3" width="305" height="6" /> //   <Rect x="7" y="45" rx="3" ry="3" width="350" height="6" /> //   <Rect x="9" y="22" rx="3" ry="3" width="85" height="6" /> //   secondaryColor="#EEEEEE"> //   primaryColor="#E0E0E0" //   speed={0.6} //   width={300} //   height={600} //   style={{marginTop: 0, marginLeft: 0, alignSelf: 'center'}} // <ContentLoader
              //   <Rect x="2" y="352" rx="3" ry="3" width="305" height="6" />
              //   <Rect x="2" y="372" rx="3" ry="3" width="201" height="6" />
              //   <Rect x="3" y="411" rx="3" ry="3" width="85" height="6" />
              //   <Rect x="1" y="434" rx="3" ry="3" width="350" height="6" />
              //   <Rect x="1" y="454" rx="3" ry="3" width="305" height="6" />
              //   <Rect x="1" y="474" rx="3" ry="3" width="201" height="6" />
              //   <Rect x="0" y="507" rx="3" ry="3" width="85" height="6" />
              //   <Rect x="-2" y="530" rx="3" ry="3" width="350" height="6" />
              //   <Rect x="-2" y="550" rx="3" ry="3" width="305" height="6" />
              //   <Rect x="-2" y="570" rx="3" ry="3" width="201" height="6" />
              // </ContentLoader>

              // this.state.notfctnArray.length <= 0 ? (
              //   <View style={styles.styleEmptyList}>
              //     <Image
              //       source={AssetsImages.about_logo}
              //       style={{ height: 70, width: 70, tintColor: "cyan" }}
              //       resizeMode={"contain"}
              //     />
              //     <Text style={styles.text}>{"No notifications found"}</Text>
              //   </View>
              // ) :
              // (

              <FlatList
                contentContainerStyle={{ paddingBottom: 200 }}
                data={this.state.newsArray}
                // onRefresh={() => this.onRefresh()}
                // refreshing={this.state.isRefreshing}
                // refreshControl={
                //   <RefreshControl
                //     colors={["#5F2DC4", "#5F2DC4"]}
                //     onRefresh={() => this.onRefresh()}
                //     refreshing={this.state.isRefreshing}
                //   />
                // }
                renderItem={({ item }) => this.renderNotificationList(item)}
              />

              // )
            }
          </View>
        </View>
      </View>
    );
  }
  onRefresh = () => {
    this.setState(
      {
        isRefreshing: true,
        visbltyCntntLdr: true
      },
      () => {
        this.apiNotifications();
      }
    );
  };

  renderNotificationList = item => (
    <View style={styles.card}>
      {/* {console.warn("itemmmmmmmmmm---", item.file_path)} */}
      <Image
        style={styles.cardImage}
        // source={AssetsImages.header}

        source={{
          uri: BASE_URL + item.file_path
        }}
        // resizeMode="stretch"
      />
      <View
        style={styles.cardContent}
        // style={
        //   item.data === "two" || item.data === "four"
        //     ? (style = styles.cardContentGreen)
        //     : (style = styles.cardContent)
        // }
      >
        <Text style={styles.date}>{item.date}</Text>
        <Text numberOfLines={2} style={styles.title1}>
          {item.news_title}
        </Text>
        <Text numberOfLines={2} style={styles.title2}>
          {item.news_summary}
        </Text>
      </View>
    </View>
  );
}
