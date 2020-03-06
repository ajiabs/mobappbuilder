import { StyleSheet, Dimensions } from "react-native";
import { BuildConfig } from "../../config";
import { Font, FontSize } from "../../utils";

const deviceHeight = Dimensions.get("window").height;
export default StyleSheet.create({
  container: {
    flex: 1
  },
  headerImgContainer: {
    width: "100%"
  },
  backGroundimg: {
    width: "100%",
    height: deviceHeight / 2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  backContainer: {
    marginTop: 25,
    alignItems: "flex-start",
    marginLeft: 25
  },
  leftArrowimg: {
    fontSize: 16,
    color: "#fff"
  },
  bodyContainer: {
    flex: 1
  },
  textContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  mainText: {
    fontFamily: Font.Regular,
    fontSize: FontSize.Medium,
    color: "#3266B9"
  },
  subTextContainer: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10
  },
  subText: {
    marginLeft: 10,
    fontFamily: Font.Regular,
    fontSize: FontSize.Small,
    color: "grey",
    alignSelf: "center"
  },
  locationIcon: {
  },
  textContentContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10
  },
  textDetails: {
    fontFamily: Font.Regular,
    fontSize: FontSize.Small
  },
  buttonContainer: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: BuildConfig.background_color,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  donateText: {
    fontFamily: Font.Regular,
    fontSize: FontSize.MediumLarge,
    color: BuildConfig.text_color
  }
});
