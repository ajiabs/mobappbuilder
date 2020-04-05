import { StyleSheet } from "react-native";
import { BuildConfig } from "../../config";
import { Font, FontSize } from "../../utils";

export const Styles = StyleSheet.create({
  page_background_color: {
    backgroundColor: "#132051"
  },
  page_text_color: {
    color: "#000"
  },
  container: {
    flex: 1,
    backgroundColor: '#ff00ff',
    // justifyContent: "center",
    // alignItems: "center"
    // paddingTop:100,
    
  },toolbar: {
    // flex: 1,
    backgroundColor: '#ff00ff',
    // justifyContent: "center",
   // width:'100%',
    // height:'100%',
   // marginLeft:15,
    // alignItems: "center"
    // paddingTop:100,
    
  },about_us_image: {
    // flex: 1,
    // backgroundColor: '#ff00ff',
    // justifyContent: "center",
   // width:'100%',
    resizeMode:'stretch',
   marginLeft:150,
    // alignItems: "center"
    // paddingTop:100,
    
  },
  // container: {
  //   flex: 1,
  //   width: undefined,
  //   height: undefined,
  //   justifyContent: "center",
  //   alignItems: "center"
  // },
  menu_bar: {
    flex: 1
  },
  app_name: {
    position: "absolute",
    bottom: 140,
    fontSize: 30,
    color: "#FFFF"
  },
  main_heading: {
    color: "#FFFF",
    fontSize: 44,
    position: "absolute",
    bottom: 300
  },

  heading: {
    color: "#FFFF",
    fontSize: 15,
    position: "absolute",
    bottom: 280
  },

  get_started: {
    position: "absolute",
    bottom: 30,
    width: 150,
    height: 50,
    backgroundColor: "#030701",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: 1,
    borderColor: "#FFF",
    backgroundColor: "transparent"
  },
  get_started_text: {
    fontSize: 20,
    position: "absolute",
    bottom: 10,
    left: 18,
    color: "#FFFF"
  },
  activeTabText: {
    color: BuildConfig.menu_text_color,
    fontSize: 12,
    textAlign: "center"
  },
  inactiveTabText: {
    color: "gray",
    fontSize: 12,
    textAlign: "center"
  },
  inner_header_container: {
    position: "absolute",
    backgroundColor: "#fff",

    width: "100%",
    bottom: 0,
    top: "25%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1,
    overflow: "hidden"
  },
  inner_header: {
    paddingTop: 28,
    paddingBottom: 2,
    paddingLeft: 17,
    fontSize: 28,
    color: "#FFFF"
  },
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: "#CCCCCC",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20
  },

  event_inner_header_container: {
    position: "absolute",
    backgroundColor: "#fff",

    width: "100%",
    bottom: 0,
    top: "10%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1,
    overflow: "hidden"
  },
  textDetails: {
    fontFamily: Font.Regular,'letterSpacing': 1,
    lineHeight: 20,textAlign: 'justify',
    fontSize: FontSize.Small,
  },
  inner_content: {
    marginTop: "50%",
    textAlign: "center"
  },
  list_item: {
    backgroundColor: "transparent",
    padding: 25,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#000"
  },
  title: {
    fontSize: FontSize.Largest,fontWeight: "bold",
  },
  about_logo: {
    marginLeft: "30%",
    marginTop: "10%",
    marginBottom: "10%"
  },
  scrollview: {
    flex: 1,
    margin: 15
    // justifyContent: 'center',
    //alignItems: 'center'
  },
  back: {
    textAlign: "right",
    marginRight: "5%",
    marginTop: "2%",
    padding: 10,
    color: "#ffffff"
    //height:35,
    //width:35
  },
  contact_us_row: {
    flexDirection: "row",
    alignItems: "center"
  },
  event_card_row: {
    minHeight: 60,
    flexDirection: "row",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: "white",
    padding: 10,
    backgroundColor: "#F4EDF4"
  },
  event_card_line: {
    backgroundColor: "#000",
    width: 15,
    marginVertical: 0,
    borderRadius: 5
  },
  event_card_label: {
    flex: 1,
    padding: 10
  },
  event_heading: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 20,
    paddingBottom: 15
  },
  event_detail_heading: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 23,
    paddingBottom: 20
  },
  event_detail_description: {
    paddingBottom: 20
  },
  event_time: {
    paddingTop: 10
  },
  event_row: {
    flexDirection: "row"
  },
  event_row_image: {
    marginTop: 18,
    width: 20,
    height: 20
  },
  customDonateText: {
    margin: 5,
    marginTop: 35,
    padding: 15,
    // height: 60,
    //opacity: 0.5,
    paddingLeft: 10,
    backgroundColor: "#2FC2E1",
    // alignSelf: "center",
    //  width: "100%",
    textAlign: "center",
    // fontSize: 25,
    fontFamily: Font.Regular,
    fontSize: FontSize.Large,
    // fontFamily: Font.Medium,
    color: "white",
    //  marginLeft: 30

    borderColor: "#2FC2E1",
    borderWidth: 1,
    borderRadius: 50,
    shadowColor: "#E0E0E0",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 0,
    borderTopWidth: 2
  },
  event_row_text: {
    paddingTop: 14,
    paddingLeft: 15,
    paddingRight: 15
  },
  contact_us_row_image: {
    marginTop: 25,
    marginLeft: 20,
    width: 20,
    height: 20
  },
  contact_us_social_image: {
    marginTop: 20,
    marginLeft: 20,
    width: 40,
    height: 40
  },
  contact_us_text: {
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15
  },
  contact_us_text_first: {
    paddingTop: 40
  },
  contact_us_connect: {
    paddingTop: 50,
    paddingLeft: 15,
    fontSize: 20
  }
});
