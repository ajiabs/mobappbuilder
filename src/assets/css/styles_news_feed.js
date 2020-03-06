import { StyleSheet } from "react-native";
import { BuildConfig } from "../../config";
import { Font, FontSize } from "../../utils";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  headerView: {
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  title: {
    paddingTop: 70,
    backgroundColor: "#3266B9",
    alignSelf: "center",
    width: "100%",
    textAlign: "center",
    fontSize: 25,
    paddingBottom: 30,
    // fontFamily: Font.Medium,
    color: BuildConfig.text_color,
    marginBottom: 20
  },
  text: {
    color: "red"
  },

  notificationBox: {
    width: 325,
    height: 88,
    // backgroundColor: 'red',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  list_item_container: {
    //  height: 120,
    alignSelf: "baseline",
    width: "95%",
    marginTop: 10,
    paddingHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 15,
    alignSelf: "center",
    // backgroundColor: 'red',
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 20,
    shadowColor: "#E0E0E0",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 0,
    borderTopWidth: 2,
    // borderBottomWidth: 5,
    // borderRadius: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },

  newsfeedImage: {
    // position: 'absolute',
    // top: -100,
    // left: 0,
    // right: 0,
    ///bottom:-100,

    height: 200,
    flex: 1,
    backgroundColor: "white",
    alignSelf: "baseline",
    width: "100%",
    //  marginTop: -120,
    // marginLeft: 30,
    // marginRight: 30,
    marginBottom: 10,
    //  paddingHorizontal: 15,
    // paddingBottom: 10,
    //  paddingTop: 15,
    alignSelf: "center",
    // backgroundColor: 'red',
    borderColor: "#ffffff",
    borderWidth: 0,
    borderRadius: 20,
    shadowColor: "#E0E0E0",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 0,
    borderTopWidth: 2,
    borderBottomWidth: 5,
    borderRadius: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },

  dateTextStyle: {
    fontSize: 10,
    marginTop: 10,
    width: "100%",
    // fontFamily: Font.Regular,
    alignSelf: "flex-end"
    // color: COLORS.GREY,
  },
  list_item_text_h1: {
    color: "#000",
    fontSize: 15
    // fontFamily: Font.Medium
  },
  styleEmptyList: {
    alignItems: "center",
    // marginTop: deviceHeight - 10,
    marginTop: -100,
    justifyContent: "center",
    width: "100%",
    height: "100%"
    // height: 600,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    alignSelf: "center",
    //fontFamily: Font.Regular,
    color: "#00ffff"
  },

  list_item_text_h3: {
    color: "#000000",
    fontSize: 13,
    marginTop: 5
    // fontFamily: Font.Regular
  },
  deleteContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  deleteText: {
    // color: COLORS.GREY,
    fontSize: 10,
    marginTop: 5,
    //  fontFamily: Font.Regular,
    marginLeft: 5
  },
  deleteImg: {
    alignItems: "flex-end"
  },

  card: {
    // marginLeft: 10,
    // marginRight: 10,
    marginBottom: 10,
    margin: 10,

    // borderRadius: 25,
    height: 270,
    // width: "100%",
    overflow: "hidden",
    backgroundColor: "white"
  },
  cardImage: {
    // position: "absolute",
    //top: 0,
    // right:10,
    borderRadius: 10,
    // borderBottomStartRadius: 15,
    // borderBottomEndRadius: 15,
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
    resizeMode: "cover",
    height: "100%",
    width: "100%",
    overflow: "hidden"
  },

  cardContent: {
    // backgroundColor: BuildConfig.background_color,
    backgroundColor: "rgba(50.0, 102.0, 185.0, 0.8)",
    height: "41%",
    // opacity: 0.7,
    position: "absolute",
    bottom: 0,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    //  marginLeft: 10,
    //  marginRight: 10,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    // margin: 10,
    // marginLeft: 10,
    // marginRight: 10
    width: "100%"
  },
  cardContentGreen: {
    // backgroundColor: BuildConfig.background_color,
    // opacity: 0.7,
    backgroundColor: "rgba(53.0, 216.0, 250.0, 0.8)",
    height: "40%",
    position: "absolute",
    bottom: 0,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    //  marginLeft: 10,
    //  marginRight: 10,
    padding: 15,
    // margin: 10,
    // marginLeft: 10,
    // marginRight: 10
    width: "100%"
  },

  date: {
    color: BuildConfig.text_color,
    zIndex: 999,
    paddingBottom: 2,
    // marginRight: 10,
    textAlign: "right",
    opacity: 0.7,
    zIndex: 999,
    // fontSize: 13,
    fontFamily: Font.Regular,
    fontSize: FontSize.Small
  },

  title1: {
    alignSelf: "center",
    width: "100%",
    lineHeight: 20,
    paddingBottom: 5,
    // paddingStart: 10,
    color: BuildConfig.text_color,
    textAlign: "left",
    fontFamily: Font.Regular,
    fontSize: FontSize.MediumLarge,
    zIndex: 999
  },
  title2: {
    alignSelf: "center",
    width: "100%",
    opacity: 0.8,
    // paddingStart: 10,
    // paddingEnd: 10,
    // paddingBottom: 5,
    color: BuildConfig.text_color,
    textAlign: "left",
    fontFamily: Font.Regular,
    fontSize: FontSize.Small,
    zIndex: 999
  },
  /******** card components **************/

  time: {
    fontSize: 13,
    color: "#ffffff",
    marginTop: 5
  },

  icon: {
    width: 25,
    height: 25
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    flex: 1
  },
  socialBarSection: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flex: 1
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: "flex-start",
    justifyContent: "center",
    color: "#ffffff"
  },
  socialBarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
