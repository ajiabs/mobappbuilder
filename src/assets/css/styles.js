import { StyleSheet } from 'react-native';
import { BuildConfig } from '../../config';
export const Styles = StyleSheet.create({
    page_background_color:{
      backgroundColor:BuildConfig.background_color,
    },
    page_text_color:{
      color: BuildConfig.text_color,
    },
    container: {
      flex: 1,
      width: undefined,
      height: undefined,
      justifyContent: 'center', 
      alignItems: 'center',
    },
    menu_bar:{
      flex:1
    },
    app_name:{
      position: 'absolute',
      bottom:140,
      fontSize:30,
      color:'#FFFF',
    },
    heading :{
      color:'#FFFF',
      fontSize:15,
      position: 'absolute',
      bottom:90,
    },
  
    get_started:{
      position: 'absolute',
      bottom:30,
      width: 150,
      height: 50,
      backgroundColor:"#030701",
      borderTopLeftRadius: 30, 
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30, 
      borderWidth:1,
      borderColor:"#FFF",
      backgroundColor:"transparent"
      
    },
    get_started_text:{
      fontSize:20,
      position: 'absolute',
      bottom:10,
      left:18,
     
    },
    activeTabText: {
        color:BuildConfig.menu_text_color,
        fontSize: 12,
        textAlign: 'center'
      },
    inactiveTabText: {
      color:'gray',
      fontSize: 12,
      textAlign: 'center'
    },
    inner_header_container: {
      position: "absolute",
      backgroundColor: "#fff",
    
      width:"100%",
      bottom: 0,
      top: "25%",
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      flex:1,
      overflow:'hidden'
    },
    inner_header : {
      paddingTop: 28,
      paddingBottom: 2,
      paddingLeft: 17,
      fontSize: 28,
    
    },



    event_inner_header_container: {
      position: "absolute",
      backgroundColor: "#fff",
    
      width:"100%",
      bottom: 0,
      top: "10%",
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      flex:1,
      overflow:'hidden'
    },

    

    inner_content: {
      marginTop: '50%',
      textAlign: 'center'
    },
    list_item: {
      backgroundColor: 'transparent',
      padding: 25,
      marginVertical: 8,
      marginHorizontal: 16,
      borderWidth:1,
      borderColor:"#000",
      
    },
    title: {
      fontSize: 24,
    },
    about_logo:{
      marginLeft:'30%',
      marginTop:'10%',
      marginBottom:'10%'
    },
    scrollview:{
      flex:1,
      margin:15, 
     // justifyContent: 'center',
      //alignItems: 'center'
    },
    back:{
      textAlign: 'right',
      marginRight:'5%',
      marginTop:'2%',
      padding:10
      //height:35,
      //width:35
    },
    contact_us_row:{
      flexDirection:'row',
      alignItems:'center'
    },
    event_card_row:{
    minHeight: 60,
    flexDirection:'row',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor:'white',
    padding:10,
    backgroundColor:"#F4EDF4", 
    },
    event_card_line:{
      backgroundColor:"#000", 
      width:15,
       marginVertical:0,
       borderRadius:5, 
    },
    event_card_label:{
      flex:1, padding: 10
    },
    event_heading:{
      fontWeight: 'bold',
      color: '#000',
      fontSize:20,
      
    },
    event_detail_heading:{
      fontWeight: 'bold',
      color: '#000',
      fontSize:30,
    },
    event_detail_description:{
   paddingBottom:20
    },
    event_description:{
     
    },
    event_row:{
      flexDirection:'row',
    },
    event_row_image:{
      marginTop:18,
      width:20,
      height:20
    },
    event_row_text:{
      paddingTop:14,
      paddingLeft:15,
      paddingRight:15

    },
    contact_us_row_image:{
      marginTop:25,
      marginLeft:20,
      width:20,
      height:20
    },
    contact_us_social_image:{
      marginTop:20,
      marginLeft:20,
      width:40,
      height:40

    },
    contact_us_text:{
      paddingTop:20,
      paddingLeft:15,
      paddingRight:15

    },
    contact_us_text_first:{
      paddingTop:40,
    
    },
    contact_us_connect:{
      paddingTop:50,
      paddingLeft:15,
      fontSize:20
    
    }

  });
  
