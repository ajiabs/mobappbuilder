import React from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  RefreshControl,
  View,
  ActivityIndicator,
} from 'react-native';
import {BuildConfig} from '../../config';
import {BASE_URL} from '../../config/ApiDomain';
import {APIEndpoints} from '../../config/ApiEndpoints';
import styles from './styles';
import SvgImage from '../../assets/svgIcons';
const dummy = [{data: 'one'}, {data: 'two'}, {data: 'three'}];
export default class EventListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DataItem: [],
      hasDonate: false,
      loading: true,
    };
  }
  componentDidMount() {
    this.eventApi();
  }

  eventApi() {
    var data = {
      token_id: BuildConfig.token_id,
    };
    return fetch(APIEndpoints.EVENTS, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isRefreshing: false,
        });
        if (responseJson.data != undefined) {
          console.warn('response  LIST', responseJson);
          let donate = responseJson.donate ? responseJson.donate : false;
          this.setState({
            DataItem: responseJson.data,
            loading: false,
            hasDonate: donate,
          });
        }
      })
      .catch(error => {
        this.setState({loading: false});
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
        {this.state.loading
          ? this.renderActivityIndicator()
          : this.renderContent()}
      </View>
    );
  }

  renderContent = () => (
    <FlatList
      data={this.state.DataItem}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => this.renderEventList(item, index)}
      refreshing={this.state.loading}
      onRefresh={() => this.onRefresh()}
              refreshing={this.state.isRefreshing}
              refreshControl={
                <RefreshControl
                  colors={['#3266B9', '#3266B9']}
                  onRefresh={() => this.onRefresh()}
                  refreshing={this.state.isRefreshing}
                />
              }
      ListEmptyComponent={this.noListItemDisplay}
      keyExtractor={item => item.id}
    />
  );

  onRefresh = () => {
    this.setState(
      {
        isRefreshing: true,
      },
      () => {
        this.eventApi();
      },
    );
  };

  noListItemDisplay = () => (
    <View
      style={styles.noListItemDisplay}>
      <SvgImage icon={'listEmpty'} height={150} width={150} />
      {/* <Text style={styles.noDataText}>Looks like there is no data</Text> */}
      <Text style={styles.noDataText}>No More Events Found.</Text>
    </View>
  );

  renderActivityIndicator = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator
          size="large"
          color={
            BuildConfig.background_color
              ? BuildConfig.background_color
              : 'black'
          }
        />
      </View>
    );
  };

  renderEventList = (item, index) => {
    let newData = {...item, hasDonate: this.state.hasDonate};
    return (
      <View style={styles.eventListContainer}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('EventListingDetail', newData)
          }>
          <View style={styles.imageContainerStyle}>
            <Image
              source={{
                uri: BASE_URL + item.file_path,
              }}
              style={styles.imageStyle}></Image>
          </View>
        </TouchableOpacity>
        <View style={styles.imageBottomBar}></View>

        <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
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
          {this.state.hasDonate ? (
            <TouchableOpacity
              style={styles.donateContainer}
              onPress={() => this.props.navigation.navigate('Donation', item)}>
              <Text style={styles.donateText}>Donate</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  };
}
