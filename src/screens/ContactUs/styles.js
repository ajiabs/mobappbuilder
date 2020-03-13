import { StyleSheet, Dimensions } from "react-native";
import { BuildConfig } from "../../config";
import { Font, FontSize } from "../../utils";
const deviceHeight = Dimensions.get("window").height;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    backgroundColor: BuildConfig.background_color,
    width: "100%",
    height: 160
  },
  title: {
    fontFamily: Font.SemiBold,
    fontSize: FontSize.Largest,
    color: BuildConfig.text_color,
    opacity: 0.6, 
  },
  backArrowContainer: {
    marginTop: 55,
    alignItems: "flex-start",
    marginLeft: 20
  },
  backArrow: {
    height: 15,
    tintColor: "white",
    width: 30
  },
  hedingContainer: {
    marginTop: 30,
    marginLeft: 20,
    marginBottom: 20
  },
  bodyContainer: {
    flex: 1,
  },
  locationContainer: {
    flexDirection: "row",
    width: "100%",
    height:50,
    marginTop: 50,
    marginLeft: 20,
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
    fontSize: FontSize.Average,
    alignSelf: "flex-start",
    marginTop: 5
  },
  phoneContainer: {
    flexDirection: "row",
    width: "100%",
    height:50,
    marginLeft: 20,
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
    fontSize: FontSize.Average,
    alignSelf: "flex-start",
  },
  emailContainer: {
    flexDirection: "row",
    width: "100%",
    height:50,
    marginLeft: 20,
  },
  emailImgContainer: {
    alignSelf:'center'
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
    fontSize: FontSize.Average,
    alignSelf: "flex-start",
    marginTop: 5
  },
  connectWithUsContainer: {
    flex:1,
    marginTop:20,
  },
  connectTextContainer: {
    marginLeft: 20,
    width: "100%",
    height: 50
  },
  connectText: {
    fontFamily: Font.Regular,
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
