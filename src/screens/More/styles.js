import { StyleSheet, Dimensions } from "react-native";
import { BuildConfig } from "../../config";
import { Font, FontSize } from "../../utils";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    backgroundColor: BuildConfig.background_color,
    width: "100%",
  },
  imageContainer: {
    marginLeft: 20,
    marginTop: 50,
    alignSelf: "flex-start"
  },
  backArrowImg: {
    height: 20,
    tintColor: "white",
    width: 30,
    marginTop: 10
  },
  moreTitleContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignSelf: "center",
  },
  title: {
    fontFamily: Font.SemiBold,fontWeight: "bold",
    'letterSpacing': 1,
    fontSize: FontSize.LargeMedium,
    paddingBottom: 20,
    color: BuildConfig.text_color
  },
  bodyContainer: {
    flex: 1
  },
  aboutContainer: {
    marginTop: 40,
    marginLeft: 20,
    height: 50
  },
  aboutText: {
    fontFamily: Font.Bold,fontWeight: "bold",
    'letterSpacing': 1,
    fontSize: FontSize.MediumLarge
  },
  aboutHorizontal: {
    marginTop: 20,
    marginRight: 20,
    backgroundColor: "gray",
    height: 1
  },
  contactContainer: {
    marginTop: 30,
    marginLeft: 20,
    height: 50
  },
  contactText: {
    fontFamily: Font.Bold,fontWeight: "bold",
    'letterSpacing': 1,
    fontSize: FontSize.MediumLarge
  },
  contactHorizontal: {
    marginTop: 20,
    marginRight: 20,
    backgroundColor: "gray",
    height: 1
  }
});
