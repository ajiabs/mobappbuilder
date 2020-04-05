import { StyleSheet, Dimensions } from "react-native";
import { BuildConfig } from "../../config";
import { Font, FontSize } from "../../utils";
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    flex: 1, 
    // width: "100%",
    // height: "100%",
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignSelf: "center",
    //  backgroundColor: 'red'
  },noListItemDisplay: {
    flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%',
        width:'100%',
        // position:'absolute',
        // bottom:20,

        // backgroundColor:'#03A9F4',
        // backgroundColor: 'white',
        marginTop: deviceWidth/2,
  },
  headerView: {
    backgroundColor: BuildConfig.background_color,
    // backgroundColor: "#FFEB3B",
    width: "100%",
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignSelf: "center",
  },
  title: {
    marginTop: 40,
    alignSelf: "center",
    textAlign: "center",'letterSpacing': 1,
    fontSize: 25,
    paddingBottom: 20, fontWeight: "bold",
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
    borderRadius: 10,
    width: "95%"
  },
  imageBottomBar: {
    flex: 1,
    height:10,
    backgroundColor: '#3266B9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    // borderTopLeftRadius: 15,
    // borderTopRightRadius: 15,
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
    // marginHorizontal: 5,
    borderColor: "#3266B9",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    width: 70,
    height: 30
  },
  donateText: {
    fontFamily: Font.Regular,
    fontSize: FontSize.Small,fontWeight: "bold",
    color: "#000000"
  },
  noDataText: {
    fontFamily: Font.Regular,
    fontSize: FontSize.Large,
    color: "black"
  },
});
