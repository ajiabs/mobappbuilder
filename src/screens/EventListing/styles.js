import { StyleSheet, Dimensions } from "react-native";
import { BuildConfig } from "../../config";
import { Font, FontSize } from "../../utils";
export default StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'white'
  },
  headerView: {
    backgroundColor: BuildConfig.background_color,
    width: "100%"
  },
  title: {
    marginTop: 40,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 25,
    paddingBottom: 20,
    color: "#fff"
  },
  eventListContainer: {
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 15,
    width: "95%"
  },
  imageContainerStyle: {
  },
  imageStyle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: "100%",
    height: 160
  },
  bottomContainer: {
    flex: 1
  },
  textContainer: {},
  mainText: {
    color: "#3266B9",
    marginLeft: 10,
    fontFamily: Font.Regular,
    fontSize: FontSize.MediumLarge
  },
  subText: {
    color: "#A8A8B9",
    marginLeft: 10,
    fontFamily: Font.Regular,
    fontSize: FontSize.Small
  },
  donateContainer: {
    marginHorizontal: 5,
    borderColor: "#3266B9",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    width: 80,
    height: 30
  },
  donateText: {
    fontFamily: Font.Regular,
    fontSize: FontSize.Small,
    color: "#3266B9"
  },
  noDataText: {
    fontFamily: Font.Regular,
    fontSize: FontSize.Average,
    color: "black"
  },
});
