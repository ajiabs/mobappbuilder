import React from 'react';
import { View, Text ,Dimensions,ScrollView,FlatList, TouchableOpacity} from 'react-native';
import { Styles } from '../assets/css/styles';
import { AssetsImages } from '../assets/images';
import { BuildConfig } from '../config';
import {Calendar} from 'react-native-calendars';
let { width } = Dimensions.get('window');
var Data = [
  {
    start_date: '2019-12-02',
    time: '01:00-09:00',
    title: 'AMERICAN FILM AWARDS® 2019 ',
    location:'Regal LA Live & 4DX ,1000 West Olympic Boulevard Los Angeles,',
    summary: 'PLAY FESTIVAL (12pm to 3pm) - Showcasing new Recording Artists, Producers, Beatmakers, Models, Fashion Designers, Comedians, Scripwriters, Influencers, Gamers, and Content Creators - meeting with Brands, Buyers and Investors + Entertainment Panels and Networking.Red Carpet Arrivals for Gala (5pm -7pm)',
  },{
    start_date: '2019-12-03',
    time: '07:00-11:00',
    title: '2019 Music & Art Exhibit by Woven Colors',
    location:'Hot and Cool Cafe 4331 Degnan Boulevard Los Angeles',
    summary: 'We are here for the community of creators of all kind! Come support local artist in the music industry and visual arts. This event will bring together professionals in the arts & entertainment industry among others to enjoy music and art in one place.Look forward to a evening filled with performances, spoken word, art gallery, music listening, and networking.Art work will available for purchase.',
  },
  {
    start_date: '2019-12-02',
    time: '07:00-11:00',
    title: 'Emerging Tech - Digital Humans & Virtual Production',
    location:'The Scan Truck - Mobile 3D Scanning Los Angeles 11160 Hindry Avenue Los Angeles',
    summary: 'The ways in which we create content are changing rapidly, and the line between digital and real becoming blurred. New tools have emerged in the entertainment industry and beyond to represent characters digitally and create content with them through virtual production - increasing efficiency and reducing costs.',
  },
  {
    start_date: '2019-12-03',
    time: '08:00-12:00',
    title: 'Content Protection Summit 2019',
    location:'Sheraton Universal Hotel 333 Universal Hollywood Dr.Universal City,',
    summary: 'Industry leaders from the Hollywood studios, television networks and content production community are again scheduled to meet at the 10th Annual CDSA Content Protection Summit on Wednesday, December 4, 2019 at the Sheraton Universal. The full-day conference program will address the dynamic challenges throughout the entertainment supply chain in managing risk, thwarting attacks and educating their teams while protecting their business practices and customers’ privacy.',
  },
  {
    start_date: '2019-12-03',
    time: '01:00-10:00',
    title: 'The Sound Bar experience ',
    location:'7080 Hollywood Blvd 7080 Hollywood Boulevard Los Angeles',
    summary: 'MIXER - Exclusive to influencers/brand ambassadors & Sponsors,Artists • Podcasters • DJs • Influencers • Hype beast • Models • etc,Apparel • Restaurants • Tech • Cannabis • Music • All industries Current influencer follower count: 3 Million (Updated every week) Current Sponsor budget: 25 influencers (Updated every week)',
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
      selected_date:{year:2019,month:12,day:02}
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
          current={'2019-12-02'}
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

