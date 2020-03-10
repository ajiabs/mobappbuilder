import React from 'react';
import { View, Text ,Dimensions,ScrollView,FlatList, TouchableOpacity} from 'react-native';
import { Styles } from '../assets/css/styles';
import { AssetsImages } from '../assets/images';
import { BuildConfig } from '../config';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
let { width } = Dimensions.get('window');
var Data = [];


function Item({ item ,navigation}) {


  return (
  <TouchableOpacity  style={[Styles.event_card_row]} onPress={() => navigation.navigate('EventDetails',item)}>
        <View style={[Styles.event_card_line,Styles.page_background_color]} />
        <View style={[Styles.event_card_label]}>
          <Text style={[Styles.event_heading,Styles.page_text_color]}>{item.title}</Text>
        <Text style={[Styles.event_description,Styles.page_text_color]}>
        {item.summary}
        </Text>
        <Text style={[Styles.event_time,Styles.page_text_color]}>
         Time: {item.time}
        </Text>
        </View>
     </TouchableOpacity>
     );
}

function fetchEvents(date,d){
  var searched_date = date.year+'-'+date.month+'-'+ ("0" + date.day).slice(-2); 
 
  
  var res = d.filter((item)=>{
    return Object.keys(item).some((key)=>item[key].includes(searched_date));
  });
  return {result:res,date:searched_date};


}
export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      DataItem: Data,
      selected_date:{year:2019,month:12,day:3},
      resEvent:{value:"Alabama"},
      markedDates:{},
      currentDate:""
    }; 
  
  }

  
 getEvents(date){
 
 this.state.currentDate = date.dateString;

    var res = fetchEvents(date,this.state.resEvent.value);
   
    this.setState({ 
      DataItem:  res.result,
      selected_date:res.date,
      currentDate:date.dateString
    }); 

  }

  componentDidMount() {
    
    var todayDate   =   moment().format('YYYY-MM-DD');
    var todayDate2  = moment().format('YYYY-M-DD');

    this.state.selected_date.year = moment().format('YYYY');
    this.state.selected_date.month = moment().format('M');
    this.state.selected_date.day = moment().format('DD');
    
    this.state.currentDate = todayDate;
    var data = {
      token_id: BuildConfig.token_id,
    };
    return fetch(APIEndpoints.EVENTS,
    {
    method: "POST",
    headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((responseJson) => {

       console.log(responseJson);
        

        var resData = [];
        var setDate = {};
        var newsetDate = {};
        
       
        for (let eventObject of responseJson) {
          
 
          //console.log(eventObject['events_id']);


          var mydate = (eventObject['event_start_date']);
          mydate = mydate.split("/");
          var formatDate = mydate[2]+'-'+mydate[1]+'-'+mydate[0];

          var d1 = moment(new Date(formatDate)).format('YYYY-MM-DD');
          var d2 = moment(new Date(formatDate)).format('YYYY-M-DD');

         

          var date = d1;
          var date1 = d2;
          var newDate = date;
          var newDate1 = date1;
          setDate[newDate] = {selected: true};

          var obj = {
            
            start_date: newDate1,
            time: eventObject['event_start_time'],
            title: eventObject['event_title'],
            location:eventObject['location'],
            summary: eventObject['event_summary'],
            events_id: eventObject['events_id'].toString()
            
          }
          

        
          
          resData.push(obj);

      }

     console.log(resData,"resData");

      this.setState({
         resEvent:{value:resData},
         markedDates:setDate
      }, function(){

        console.log("fetchEvents");
        var res = fetchEvents(this.state.selected_date,this.state.resEvent.value);
        this.setState({ 
          DataItem:  res.result,
          selected_date:res.date,
         
        }); 
      });
     
      
      

      })
      .catch((error) =>{
        console.error(error);
      });


      
    



    
    
   

    this.setState({ 
      DataItem:  res.result,
      selected_date:res.date,
     
    
    }); 
    
  

  }
  render() {
   


    return (
      <View style={[Styles.menu_bar,Styles.page_background_color]}>
        <Text style={[Styles.back,Styles.page_text_color]}  onPress={() => this.props.navigation.navigate('Home')}>Back</Text>
      
         <View style={[Styles.event_inner_header_container]}>

         <Calendar
            theme={{
            monthTextColor: '#165c96',
            arrowColor: '#165c96',
            todayTextColor: '#33a8e2',
            selectedDayTextColor: 'white',
            selectedDayBackgroundColor: 'red',
      
            }}
          markedDates={this.state.markedDates}
                    
          // Initially visible month. Default = Date()
          current={this.state.currentDate}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2019-01-01'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2030-12-31'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(date) => {this.getEvents(date)}}

          

          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          //renderArrow={(direction) => (<Arrow />)}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={true}
          // Show week numbers to the left. Default = false
          showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
        />

        <View/>

       
        
        {this.state.DataItem.length >0 ?
         <FlatList

          data={ this.state.DataItem}
          renderItem={({ item }) => <Item item={item}  navigation={this.props.navigation}/>}
          keyExtractor={item => item.id}
        />:<Text style={{textAlign:'center',marginVertical:'25%'}}>No events yet to show</Text>}
         
  
          
         </View>


      </View>
    );
  }
}
