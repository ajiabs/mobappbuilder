import { StyleSheet, Dimensions } from "react-native";
import { BuildConfig } from "../../config";
import { Font, FontSize } from "../../utils";
const deviceHeight = Dimensions.get("window").height;
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
   // backgroundColor: '#FFEB3B',
  },
  headerView: {
    backgroundColor: BuildConfig.background_color,
    // backgroundColor: '#ff0000',
    // width: "100%",
    // height: 160
   // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf:'center',
    paddingLeft:30,
    paddingRight:30,
    paddingBottom:20,
    paddingTop:55,
    
  },
  title: {
    fontFamily: Font.SemiBold,
    fontSize: FontSize.Largest,
    textAlign:'center', fontWeight: "bold",
    'letterSpacing': 1,
    color: BuildConfig.text_color,
    // color: '#ffffff',

    // opacity: 0.6, 
  },
  backArrowContainer: {
  //  marginTop: 55,   
     
    //alignItems: "flex-start",
   // marginLeft: 20
  },
  backArrow: {
    tintColor: "white",
    height: 15,
    width: 30
  },
  hedingContainer: {
    // marginTop: 30,
     marginRight: 30,
     flex:1,
      // backgroundColor: '#03A9F4',
    // marginBottom: 20
   },
  bodyContainer: {
   // flex: 1,
     flexDirection: "column",
    //  justifyContent: 'center',
    //  alignItems: 'center',
    //  backgroundColor: '#03A9F4',
  },
  locationContainer: {
    flexDirection: "row",
    width: "100%",
    height:50,
    marginTop: 50,
    marginLeft: 50,
  },
  locationImgContainer: {
    alignSelf:'center'
  },
  locationImg: {
  },
  locationTextContainer: {
    marginLeft: 20,
    width: "50%"
  },
  locationText: {
    fontFamily: Font.Regular,
    fontSize: FontSize.Normal,
    alignSelf: "flex-start",
    marginTop: 5
  },
  phoneContainer: {
    flexDirection: "row",
    width: "100%",
    height:50,
    marginLeft: 50,
  },
  phoneImgContainer: {
    alignSelf:'center'
  },
  phoneImg: {
  },
  phoneTextContainer: {
    marginLeft: 20,
    width: "50%",
    alignSelf:'center'
  },
  phoneText: {
    fontFamily: Font.Regular,
    fontSize: FontSize.Normal,
    alignSelf: "flex-start",
  },
  emailContainer: {
    flexDirection: "row",
    width: "100%",
    height:50,
    marginLeft: 50,
  },
  emailImgContainer: {
    alignSelf:'center',  
    
  },
  emailImg: {
  },
  emailTextContainer: {
    marginLeft: 20,
    width: "50%",
    alignSelf:'center'
  },
  emailText: {
    fontFamily: Font.Regular,
    fontSize: FontSize.Normal,
    alignSelf: "flex-start",
    marginTop: 5
  },
  connectWithUsContainer: {
    // flex:1,
    marginTop:20, 
    marginLeft:50, 
    
    // 
  },
  connectTextContainer: {
    // marginLeft: 20,
    // flex:1,
    width: "100%", 
   
    height: 50
  },
  connectText: {
    fontFamily: Font.Regular, 
    fontWeight: "bold",
    'letterSpacing': 1,
    // backgroundColor: '#ff0000',
    fontSize: FontSize.VeryLarge
  },
  imageContainer: {
    flexDirection: "row"
  },
  fbContainer: {
    marginLeft: 20,
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: BuildConfig.background_color
  },
  fbImg: {
  },
  googleContainer: {
    marginLeft: 30,
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: BuildConfig.background_color
  },
  googleImg: {
  },
  twitterContainer: {
    marginLeft: 30,
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: BuildConfig.background_color
  },
  twitterImg: {
  }
});
