import { StyleSheet } from "react-native";
import { BuildConfig } from "../../config";
import { Font, FontSize } from "../../utils";

export default StyleSheet.create({
  activeTabText: {
    color: BuildConfig.menu_text_color,
    fontSize: 12,
    textAlign: "center"
  },

  toolbar: {
    width: "100%",
    height: 300,
    backgroundColor: BuildConfig.menu_text_color
  },
  about_us_image: {
    width: "90%",
    marginTop: -120,
    height: 240,
    alignSelf: "center"
  },
  back_arrow: {
    height: 20,
    tintColor: "white",
    width: 30,
    marginTop: 50,
    marginLeft: 30
  },
  title: {
    fontFamily: Font.Regular,
    fontSize: FontSize.Largest,
    marginTop: 20,
    color: BuildConfig.text_color,
    marginLeft: 30
  },

  content: {
    color: "#414146",
    width: "85%",
    alignSelf: "center",
    marginTop: 15,
    fontFamily: Font.Regular,
    fontSize: FontSize.Normal
  }
});
