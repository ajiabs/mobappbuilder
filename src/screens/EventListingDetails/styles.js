import {StyleSheet, Dimensions} from 'react-native';
import {BuildConfig} from '../../config';
import {Font, FontSize} from '../../utils';

const deviceHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // paddingTop:100,
    
  },
  headerImgContainer: {
    //width: '100%',
    marginLeft:15,
    marginRight:15,    
  },
  backGroundimg: {
    width: '100%', overflow: 'hidden',
    height: deviceHeight / 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backContainer: {
    marginTop: 70,
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  leftArrowimg: {
    fontSize: 16,
    color: '#fff',
  },
  bodyContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  textContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  mainText: {
    fontFamily: Font.SemiBold,  fontWeight: "bold",'letterSpacing': 1,
    fontSize: FontSize.Large, marginRight: 20, 
    color: BuildConfig.background_color,
  },
  subTextContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  subText: {
    marginLeft: 10,
    fontFamily: Font.Regular,lineHeight: 20,
    fontSize: FontSize.Small,marginRight: 20, 
    color: 'grey',
    // fontWeight: "bold",
    'letterSpacing': 1,
    alignSelf: 'center',
  },
  locationIcon: { },
  textContentContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  textDetails: {
    fontFamily: Font.Regular,'letterSpacing': 1,
    lineHeight: 20,textAlign: 'justify',
    fontSize: FontSize.Small,
  },
  buttonContainer: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: BuildConfig.background_color,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  donateText: {
    fontFamily: Font.Regular,
    fontSize: FontSize.MediumLarge,
    color: BuildConfig.text_color,
  },
});
