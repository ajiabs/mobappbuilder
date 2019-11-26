import React from 'react';
import { View, Text,StyleSheet ,FlatList,TouchableOpacity} from 'react-native';
import { BuildConfig } from '../config';
import { Styles } from '../assets/css/styles';
const DATA = [
  {
    title: 'About us',
    screen: 'AboutUs',
  },
  {

    title: 'Contact Us',
    screen: 'ContactUs',
  },

];

function Item({ title ,screen,navigation}) {
  return (
    <TouchableOpacity style={Styles.list_item}  onPress={() => navigation.navigate(screen)}>
      <Text style={[Styles.title,Styles.page_text_color]}>{title}</Text>
    </TouchableOpacity>
  );
}
export default class More extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      
      <View style={[Styles.menu_bar,Styles.page_background_color]} >
      <Text style={[Styles.inner_header,Styles.page_text_color]}>More</Text>
        <FlatList
          style={[Styles.inner_header_container,{paddingTop:'25%'}]}
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} screen={item.screen} navigation={this.props.navigation}/>}
          keyExtractor={item => item.id}
        />
        
      </View>
    );
  }
}

