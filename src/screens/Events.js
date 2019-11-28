import React from 'react';
import { View, Text ,Dimensions,ScrollView,FlatList, TouchableOpacity} from 'react-native';
import { Styles } from '../assets/css/styles';
import { AssetsImages } from '../assets/images';
import { BuildConfig } from '../config';
import {Calendar} from 'react-native-calendars';
let { width } = Dimensions.get('window');
var Data = [
  {
    start_date: '2019-11-13',
    time: '07:00-11:00',
    title: 'New Year Party',
    location:'Cochin',
    summary: 'Near stadium',
  },{
    start_date: '2019-11-29',
    time: '07:00-11:00',
    title: 'New Year Wishes',
    location:'Cochin',
    summary: 'Call to every one',
  },
  {
    start_date: '2019-11-03',
    time: '07:00-11:00',
    title: 'Parag Birthday Party',
    location:'Cochin',
    summary: 'Call him',
  },
  {
    start_date: '2019-11-29',
    time: '08:00-12:00',
    title: 'My Birthday Party',
    location:'Cochin',
    summary: 'Lets Enjoy',
  },
  {
    start_date: '2019-11-29',
    time: '01:00-10:00',
    title: 'Engg Expo 2019',
    location:'Cochin',
    summary: 'Expoo Vanue not confirm',
  },
];


function Item({ item ,navigation}) {


  return (
  <TouchableOpacity  style={[Styles.event_card_row]} onPress={() => navigation.navigate('EventDetails',item)}>
        <View style={[Styles.event_card_line,Styles.page_background_color]} />
        <View style={[Styles.event_card_label]}>
          <Text style={[Styles.event_heading,Styles.page_text_color]}>{item.title}</Text>
        <Text style={[Styles.event_description,Styles.page_text_color]}>
        {item.summary}
        </Text>
        <Text style={[Styles.event_description,Styles.page_text_color]}>
         {item.time}
        </Text>
        </View>
     </TouchableOpacity>
     );
}

function fetchEvents(date){
  var searched_date = date.year+'-'+date.month+'-'+ ("0" + date.day).slice(-2); 

  var res = Data.filter((item)=>{
    return Object.keys(item).some((key)=>item[key].includes(searched_date));
  });
  return {result:res,date:searched_date};


}
export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      DataItem: Data,
      selected_date:'2019-11-29'
    }; 
    
  
  }

  
 getEvents(date){
  
    var res = fetchEvents(date);
    this.setState({ 
      DataItem:  res.result,
      selected_date:res.date
    
    }); 

  }

  componentDidMount() {

     
    var res = fetchEvents(this.state.selected_date);
    this.setState({ 
      DataItem:  res.result,
      selected_date:res.date
    
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
          markedDates={{
              '2019-11-13': {selected: true},
              '2019-11-29': {selected: true},
              '2019-11-03': {selected: true},
           
            }}
                    
          // Initially visible month. Default = Date()
          current={'2019-11-27'}
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

