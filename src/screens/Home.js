import React from 'react';
import { View, Text,ImageBackground,Image,StyleSheet,Button,TouchableOpacity } from 'react-native';
import { AssetsImages } from '../assets/images';
import { BuildConfig } from '../config';


export default class Home extends React.Component {
  constructor(props){
    super(props);
   
  
  }
  render() {
    const backgroundColorStyles = {
        backgroundColor:  BuildConfig.background_color
    };
    const textColorStyles = {
      color:  BuildConfig.text_color
    };

    return (
     
     
      <View
      style={[styles.container, backgroundColorStyles]}>
        <Text style={[styles.app_name,textColorStyles]}>
         {BuildConfig.app_name}
      </Text>
      <Image  source={AssetsImages.logo}  style={styles.logo}>
      </Image>
      <Text style={[styles.heading,textColorStyles]}>
       {BuildConfig.app_sub_heading}
      </Text>
      <TouchableOpacity
        style={[styles.get_started,textColorStyles]}
        >
           <Text style={[styles.get_started_text,textColorStyles]}> Get Started </Text>
       </TouchableOpacity>
    </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:"#A2A2C6",
    justifyContent: 'center', 
    alignItems: 'center',
  },logo:{
    // justifyContent: 'center', 
    // alignItems: 'center',
    // position: 'absolute',
    // bottom: 320,
    // left:100,
  },
  app_name:{
    position: 'absolute',
    bottom:140,
    fontSize:30,
    color:'#FFFF',
  },
  heading :{
    color:'#FFFF',
    fontSize:15,
    position: 'absolute',
    bottom:90,
  },

  get_started:{
    position: 'absolute',
    bottom:30,
    width: 150,
    height: 50,
    backgroundColor:"#030701",
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10, 
    
  },
  get_started_text:{
    fontSize:25,
    position: 'absolute',
    bottom:10,
    left:5,
    color:'#FFFF',
  }
});
